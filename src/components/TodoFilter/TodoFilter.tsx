import React from "react";
import { Button, Flex } from "antd";
import { Filter, FilterEnum } from "../../types/types";
import { setFilter } from "../../redux/slices/todoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const TodoFilter: React.FC = () => {
  const filter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (filter: Filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <Flex gap={"10px"} style={{ marginTop: "10px" }}>
      <Button
        type={filter === `${FilterEnum.ALL}` ? "primary" : "default"}
        onClick={() => handleFilterChange(FilterEnum.ALL)}
      >
        All
      </Button>
      <Button
        type={filter === `${FilterEnum.ACTIVE}` ? "primary" : "default"}
        onClick={() => handleFilterChange(FilterEnum.ACTIVE)}
      >
        Active
      </Button>
      <Button
        type={filter === `${FilterEnum.COMPLETED}` ? "primary" : "default"}
        onClick={() => handleFilterChange(FilterEnum.COMPLETED)}
      >
        Completed
      </Button>
    </Flex>
  );
};

export default TodoFilter;
