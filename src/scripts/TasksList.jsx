import TaskItem from "./TaskItem.jsx";
import * as styles from "../styles/app.module.css";
import {useSelector} from "react-redux";

const TasksList = () => {
    const tasks = useSelector((state) => state.todos); // from react-redux
    return (
        <ul className={styles.todos}>
            {tasks.map((t) => (
                <TaskItem task={t} key={t.id}/>
            ))}
        </ul>
    );
};

export default TasksList;
