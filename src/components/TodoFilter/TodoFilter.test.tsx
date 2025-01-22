import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { addTodo, toggleTodo } from "../../redux/slices/todoSlice";
import { store } from "../../redux/store";
import TodoFilter from "./TodoFilter";
import { FilterEnum } from "../../types/types";

describe("TodoFilter Component", () => {
  it("filters active tasks correctly", async () => {
    render(
      <Provider store={store}>
        <TodoFilter />
      </Provider>
    );
    store.dispatch(addTodo("Active Task"));

    const activeButton = screen.getByRole("button", { name: /active/i });
    fireEvent.click(activeButton);

    await waitFor(() => {
      expect(store.getState().todos.filter).toBe(FilterEnum.ACTIVE);
    });

    const activeTasks = store
      .getState()
      .todos.todos.filter((todo) => !todo.completed);
    expect(activeTasks).toHaveLength(1);
    expect(activeTasks[0].text).toBe("Active Task");
  });

  it("filters completed tasks correctly", async () => {
    render(
      <Provider store={store}>
        <TodoFilter />
      </Provider>
    );
    store.dispatch(addTodo("Completed Task"));
    store.dispatch(toggleTodo(store.getState().todos.todos[1].id));

    const completedButton = screen.getByRole("button", { name: /completed/i });
    fireEvent.click(completedButton);

    await waitFor(() => {
      expect(store.getState().todos.filter).toBe(FilterEnum.COMPLETED);
    });

    const completedTasks = store
      .getState()
      .todos.todos.filter((todo) => todo.completed);
    expect(completedTasks).toHaveLength(1);
    expect(completedTasks[0].text).toBe("Completed Task");
  });
});
