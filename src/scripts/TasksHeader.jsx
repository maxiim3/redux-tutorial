import * as styles from "../styles/app.module.css";
import {useSelector} from "react-redux";

const TasksHeader = () => {
    const tasks = useSelector(state => state.todos) // from react-redux
    const undoneTasks = tasks.filter((t) => t.done === false);

    return (
        <header className={styles.header}>
            <h1>React Todo List</h1>
            <p>
                Tâches à faire : <strong>{undoneTasks.length}</strong>
            </p>
        </header>
    );
};

export default TasksHeader;