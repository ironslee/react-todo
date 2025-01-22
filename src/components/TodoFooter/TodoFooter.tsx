import React from "react";
import { Button, Flex } from "antd";
import { clearCompleted } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const TodoFooter: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <Flex style={{ marginTop: "10px", textAlign: "center" }}>
      <span>{activeTodos} item(s) left</span>
      <Button
        type="primary"
        danger
        onClick={() => dispatch(clearCompleted())}
        style={{ marginLeft: "20px" }}
      >
        Clear Completed
      </Button>
    </Flex>
  );
};

export default TodoFooter;
