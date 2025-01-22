import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { TodoInput } from ".";

describe("TodoInput Component", () => {
  it("adds a new task when input is submitted", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Test Task" } });

    fireEvent.click(addButton);

    expect(store.getState().todos.todos).toHaveLength(1);
    expect(store.getState().todos.todos[0].text).toBe("Test Task");
  });
});
