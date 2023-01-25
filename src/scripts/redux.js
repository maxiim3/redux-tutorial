import { configureStore, createSlice } from "@reduxjs/toolkit";
import {removeAccentsAndSpecialChars} from "./utils.js";

/**
 * # Creation du Store
 * @description: On va avoir plusieurs tranches.
 * On va créer des tranches.
 * Découper les différents états de notre application
 * en plusieurs "tranches" ou "slice".
 * - **name** : Le nom de l'état, ou "state"
 * - **initialState** : L'état de départ
 * - **reducer** : Les méthodes qui vont modifier notre état.
 *                 Il prend en paramètre (state, action) :
 *      - *State* : va représenter l'état précédent
 *      - *Action* : Le type d'action à appliquer à ce "state".
 * - Le reducer va faire : previousState + Action.change ==> New State.
 * il va prendre l'état précédent, appliquer l'action et retourner un nouvel état
 */
const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // {type: "todos/addTask", payload: "Nouvelle tâche"}
      const newTask = {
        text: action.payload,
        id: Date.now(),
        done: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // {type: "todos/toggleTask", payload: 1}
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) =>
      // {type: "todos/deleteTask", payload: 1}
      state.filter((t) => t.id !== action.payload),
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    updateFilter: (state, action) =>
      (state = action.payload),
  },
});

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// Les actions creators sont automatiquement créés par Redux
export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
export const { updateFilter } = filterSlice.actions;


