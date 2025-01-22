import React from "react";
import { List, Checkbox } from "antd";
import { toggleTodo } from "../../redux/slices/todoSlice";
import { FilterEnum } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const TodoList: React.FC = () => {
  const { todos, filter } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterEnum.ACTIVE) return !todo.completed;
    if (filter === FilterEnum.COMPLETED) return todo.completed;
    return true;
  });

  return (
    <List
      style={{ marginTop: "10px" }}
      bordered
      dataSource={filteredTodos}
      renderItem={(todo) => (
        <List.Item>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.completed ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.text}
              </span>
            ) : (
              todo.text
            )}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
