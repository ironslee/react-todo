import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import {
  addTodo,
  clearAllTodos,
  toggleTodo,
} from "../../redux/slices/todoSlice";
import TodoFooter from "./TodoFooter";

describe("TodoFooter Component", () => {
  beforeEach(() => {
    store.dispatch(clearAllTodos());

    store.dispatch(addTodo("Completed Task"));
    store.dispatch(toggleTodo(store.getState().todos.todos[0].id));
  });

  it("clears completed tasks", async () => {
    render(
      <Provider store={store}>
        <TodoFooter />
      </Provider>
    );

    const clearButton = screen.getByRole("button", {
      name: /clear completed/i,
    });
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(store.getState().todos.todos).toHaveLength(0);
    });
  });
});
