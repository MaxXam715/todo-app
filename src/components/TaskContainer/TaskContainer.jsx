import './TaskContainer.scss';
import TaskList from "../TaskList/TaskList.jsx";
import {useState} from "react";

export default function TaskContainer() {
    const [totalNumberTasks, setTotalNumberTasks] = useState(0);
    const [numberCompletedTasks, setNumberCompletedTasks] = useState(0);
    const [valueField, setValueField] = useState("");
    const [textNewTask, setTextNewTask] = useState("");

    const UpdateCountTask = (allCount, maxmax) => {
        setTotalNumberTasks(allCount);
        setNumberCompletedTasks(maxmax);
    }

    const handleAddTask = () => {
        console.log("valueField", valueField);
        if (valueField === "") return false;
        setTextNewTask(valueField);
        setValueField("");
    }

    return (
        <div className="task-container">
            <div className="top-bar">
                <div className="count-tasks">
                    <span className="text">{totalNumberTasks} задач</span>
                    <span className="separator">/</span>
                    <span className="text">выполнено {numberCompletedTasks}</span>
                </div>
                <div className="action-container">
                    <input
                        type="text"
                        placeholder="Новая задача..."
                        className="search-field"
                        value={valueField}
                        onChange={event => setValueField(event.target.value)}
                        onKeyDown={event => {if (event.key === 'Enter') handleAddTask()}}
                    />
                    <button type="button" className="btn btn-primary" onClick={handleAddTask}>+</button>
                </div>
            </div>
            <TaskList getCountTask={UpdateCountTask} textNewTask={textNewTask} />
        </div>
    );
}