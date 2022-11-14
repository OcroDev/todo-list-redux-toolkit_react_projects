import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload[0]];
    },
    toggleTodo: (state, action) => {
      [...state.todos] = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
