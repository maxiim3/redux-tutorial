import {Action} from "./actions.jsx";

export const toggleTodoAction = (todo) => ({
  type: Action.todos.UPDATE_TODO,
  payload: { ...todo, completed: !todo.completed },
});
