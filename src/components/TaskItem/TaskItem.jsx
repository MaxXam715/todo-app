import "./TaskItem.scss";
import React from "react";

const TaskItem = React.memo(({ task, checkTask, deleteTask }) => {
    const removeTask = (event) => {
        event.stopPropagation();
        deleteTask(task.id);
    }

    return (
        <div className="task-item" data-id={task.id} onClick={() => checkTask(task.id)}>
            <div className={`checkbox ${task.completed ? "checked" : ""}`}></div>
            <span className="desc">{task.title}</span>
            <button type="button" className="btn btn-aspect-ratio btn-delete-task" onClick={removeTask}>
                <i className="icon trash"></i>
            </button>
        </div>
    )
});

export default TaskItem;