import { createSlice } from "@reduxjs/toolkit";

export let id = 3;

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
    },
  ],
  reducers: {
    ADD_TODO: (state, action) => [
      ...state,
      {
        id: ++id,
        ...action.payload,
        completed: false,
      },
    ],
    UPDATE_TODO: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, ...action.payload };
        return todo;
      }),
  },
});

export default todosSlice.reducer;
