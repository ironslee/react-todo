import React, { useState } from "react";
import { Input } from "antd";
import { addTodo } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <Input.Search
      placeholder="What needs to be done?"
      enterButton="Add"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSearch={handleAdd}
    />
  );
};

export default TodoInput;
