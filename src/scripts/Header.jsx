import { useDispatch, useSelector } from "react-redux";
import * as styles from "../styles/app.module.css";
import { updateFilter } from "./redux.js";
import { createRef } from "react";
import {filterItems, removeAccentsAndSpecialChars} from "./utils.js";

const Header = () => {
  const tasks = useSelector((state) => state.todos); // from react-redux
  const undoneTasks = tasks.filter((t) => t.done === false);
  const inputRef = createRef();
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1>React TodoList</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
      <input
        id={"input-filter"}
        className={styles.input}
        ref={inputRef}
        type="text"
        placeholder={"Chercher dans les tâches"}
        onChange={(e) => {
          const inputUser = removeAccentsAndSpecialChars(e.currentTarget.value);
          if (inputUser.length > 1) {
            filterItems(tasks, inputUser).length > 0
              ? (inputRef.current.dataset.result = "true") // change style to valid
              : (inputRef.current.dataset.result = "false"); // change style to error
          } else inputRef.current.dataset.result = "no-result"; // remove dataset style

          return dispatch(updateFilter(inputUser)); // update filter value
        }} // update filter
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(updateFilter(""));
              inputRef.current.dataset.result = "no-result"
            inputRef.current.value = "";
              inputRef.current.blur()
          }
          return;
        }}
      />
    </header>
  );
};

export default Header;
