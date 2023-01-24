import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from "./redux.js";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(text));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </form>
  );
};

export default TaskForm;
