import './Header.scss';
import avatar from '/src/img/avatar.jpg';
import WidgetClock from "./WidgetClock.jsx";
import WidgetTemp from "./WidgetTemp.jsx";

export default function Header() {
    return (
        <header>
            <div className="left-col">
                <h1 className="title">To-Do List App</h1>
                <p className="desc">Какие задачи на сегодня?</p>
            </div>
            <div className="right-col">
                <div className="widget-container">
                    <WidgetClock />
                    <WidgetTemp />
                </div>
                <div className="profile-container">
                    <img src={avatar} className="avatar"/>
                </div>
            </div>
        </header>
    );
}