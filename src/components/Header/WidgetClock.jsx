import {useEffect, useState} from "react";
import {getCurrentTime} from "../../js/Helpers.jsx";

export default function WidgetClock() {
    const [time, setTime] = useState(getCurrentTime());

    // обновляем время
    useEffect( () => {
        const timerId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="item">
            <i className="icon clock"></i>
            <span className="text" style={{width: "62px"}}>{time}</span>
        </div>
    )
}