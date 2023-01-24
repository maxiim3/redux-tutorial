import * as styles from "../styles/app.module.css";
import {useDispatch} from "react-redux";
import {deleteTask, toggleTask} from "./redux.js";

const TaskItem = ({task}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <label>
                <input
                    className={styles.task__checkbox}
                    type="checkbox"
                    checked={task.done}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                {task.text}

                <input
                    className={styles.task__button}
                    onClick={() => dispatch(deleteTask(task.id))}
                    type={"button"}
                    style={{padding: "5px", marginLeft: "20px"}}
                    value={"X"}
                />
            </label>
        </div>
    );
};

export default TaskItem;
