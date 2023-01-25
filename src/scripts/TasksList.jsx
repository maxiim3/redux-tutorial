import TaskItem from "./TaskItem.jsx";
import * as styles from "../styles/app.module.css";
import { useSelector } from "react-redux";
import { filterItems } from "./utils.js";

const TasksList = () => {
  const tasks = useSelector((state) => state.todos); // from react-redux
  const inputFilter = useSelector((state) => state.filter);

  return (
    <ul className={styles.todos}>
      {tasks.length > 0 ? (
        filterItems(tasks, inputFilter).map((t) => (
          <TaskItem task={t} key={t.id} />
        ))
      ) : (
        <p>Ajouter des tâches</p>
      )}
    </ul>
  );
};

export default TasksList;
