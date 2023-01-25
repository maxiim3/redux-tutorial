import * as styles from "../styles/app.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux.js";

export const Footer = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(text));

    setText("");
  };
  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={"Ajouter une tâche"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text}
      </form>
    </footer>
  );
};
