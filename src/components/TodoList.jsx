import React, {useCallback} from "react";
import {todosSelectors} from "../store/todosSelectors.js";
import {toggleTodoAction} from "../store/todosActions.js";
import {useDispatch, useSelector} from "react-redux";

function TodoItem({todo, onToggle}) {
    return (
        <li>
            <label htmlFor="">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo)}
                />
                {todo.title}
            </label>
        </li>
    );
}

export const TodoList = () => {
    const todos = useSelector(todosSelectors); // from React Redux
    const dispatch = useDispatch(); // from React Redux
    const onToggle = useCallback((todo) => dispatch(toggleTodoAction(todo)), []);
    return (
        <ul>
            <h2> Hello </h2>
            {todos &&
             todos.map((todo) => {
                 console.log(todo);
                 return <TodoItem key={todo.id} onToggle={onToggle} todo={todo}/>;
             })}
    </ul>
  );
};
