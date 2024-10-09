import './css/todo.scss';
import Header from "./components/Header/Header.jsx";
import TaskContainer from "./components/TaskContainer/TaskContainer.jsx";

export default function App() {

  return (
    <div className="G-container">
        <div className="todo-global-wrapper">
            <Header />
            <TaskContainer />
        </div>
    </div>
  )
}