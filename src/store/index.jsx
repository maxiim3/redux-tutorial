import todosReducer, { todosSlice } from "./todosSlice.jsx";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  preloadedState: todosSlice.getInitialState(),
  reducer: todosReducer,
});

export default store;
