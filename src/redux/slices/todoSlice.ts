import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, FilterEnum, TodoItem } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

interface TodosState {
  todos: TodoItem[];
  filter: Filter;
}

const initialState: TodosState = {
  todos: [],
  filter: FilterEnum.ALL,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, setFilter, clearAllTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
