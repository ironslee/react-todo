import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { addTodo, clearAllTodos } from "../../redux/slices/todoSlice";
import { store } from "../../redux/store";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  beforeEach(() => {
    store.dispatch(clearAllTodos());

    store.dispatch(addTodo("Task to toggle"));
  });

  it("toggles task status correctly", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(store.getState().todos.todos[0].completed).toBe(true);
  });
});
