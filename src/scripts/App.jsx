import * as styles from "../styles/app.module.css";
import TaskForm from "./TaskForm.jsx";
import TasksHeader from "./TasksHeader.jsx";
import TasksList from "./TasksList.jsx";
import { Provider } from "react-redux";
import { store } from "./redux.js";

export default function App() {
  return (
      // Provide Store to children like Context
      <Provider store={store}>
      <div className={styles.container}>
        <article className={styles.inner}>
          <TasksHeader />
          <TasksList />
          <footer className={styles.footer}>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
