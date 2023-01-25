import * as styles from "../styles/app.module.css";
import Header from "./Header.jsx";
import TasksList from "./TasksList.jsx";
import { Provider } from "react-redux";
import { store } from "./redux.js";
import { Footer } from "./Footer.jsx";

export default function App() {
  return (
    // Provide Store to children like Context
    <Provider store={store}>
      <div className={styles.container}>
        <article className={styles.inner}>
          <Header />
          <TasksList />
          <Footer />
        </article>
      </div>
    </Provider>
  );
}
