import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import { TodoList } from "./components/TodoList.jsx";

export default () => {
  return (
    <Provider store={store}>
      <TodoList />
      <div>
        <h1>React + Redux + TypeScript</h1>
        <p>Check the console for the store updates</p>
        <ul>
          <li>Learn React</li>
          <li>Learn Redux</li>
          <li>Learn TypeScript</li>
        </ul>
      </div>
    </Provider>
  );
};
