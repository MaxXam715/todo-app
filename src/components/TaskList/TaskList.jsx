import TaskItem from "./../TaskItem/TaskItem.jsx";
import GetTask from "/src/js/Task.json";
import {useCallback, useEffect, useState} from "react";

export default function TaskList({ getCountTask, textNewTask }) {
    const [arrayTask, setArrayTask] = useState([]); // массив задач

    useEffect(() => {
        setArrayTask(GetTask);
    }, []);

    useEffect(() => {
        const AllTasks = arrayTask.length; // кол-во задач
        const completedTasks = arrayTask.filter(task => task.completed === true).length; // кол-во выполненных задач

        getCountTask(AllTasks, completedTasks);
    }, [arrayTask, getCountTask]);

    useEffect(() => {
        console.log('textNewTask', textNewTask)
        if (textNewTask) {
            addTask(textNewTask);
        }
    }, [textNewTask]);

    // выводим список задач или заглушку
    function OutputListTask() {
        if (arrayTask.length > 0) {
            return arrayTask.map((task) => <TaskItem key={task.id} task={task} checkTask={checkTask} deleteTask={deleteTask} />);
        } else {
            return <div>Задач пока нет...</div>;
        }
    }

    // отмечаем задачу
    const checkTask = useCallback((task_id) => {
        setArrayTask(prevTasks =>
            prevTasks.map(task => (task.id === task_id) ? { ...task, completed: !task.completed } : task)
        );
    }, []);

    // удалить задачу
    const deleteTask = useCallback((taskId) => {
        setArrayTask(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }, []);

    // добавить задачу
    const addTask = (text) => {
        const newTask = {
            id: Math.floor(Math.random() * 1000000),
            title: text,
            check: false
        };
        setArrayTask([...arrayTask, newTask]);
        console.log("arrayTask", arrayTask)
    }

    return (
        <>
            <div className="task-list">
                <OutputListTask />
            </div>
        </>
    )
}