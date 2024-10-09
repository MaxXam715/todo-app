import {useEffect, useState} from "react";
import {fetchWeather} from "../../js/Helpers.jsx";

export default function WidgetClock() {
    const [temp, setTemp] = useState('');

    // получаем температуру
    useEffect(() => {
        const getWeather = async () => {
            const temperature = await fetchWeather();
            setTemp(temperature);
        };

        getWeather();
    }, []);

    return (
        <div className="item">
            <i className="icon cloud"></i>
            <span className="text">{temp}</span>
        </div>
    )
}