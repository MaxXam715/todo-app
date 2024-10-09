import "./AddTask.scss";
import {useState} from "react";

export default function AddTask({addTask}) {
    const [newTaskDesc, setNewTaskDesc] = useState("");

    const handleSubmit = (event) => {
        if (event) {
            if (newTaskDesc !== "" && event.key === 'Enter') {
                addTask(newTaskDesc);
                setNewTaskDesc("");
            }
        } else {
            if (newTaskDesc !== "") {
                addTask(newTaskDesc);
                setNewTaskDesc("");
            }
        }
    }

    return (
        <div className="add-task-container">
            <input
                type="text"
                placeholder="Текст новой задачи...."
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}
                className="field"/>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Добавить</button>
        </div>
    )
}