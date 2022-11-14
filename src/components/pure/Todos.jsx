import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleTodo } from "../../app/reducers/todo/todoSlice";

const Todos = ({ todo }) => {
  const dispatch = useDispatch();
  const colorTodo = todo.completed ? { color: "gray" } : { color: "green" };
  const buttonColor = todo.completed ? "btn btn-secondary " : "btn btn-success";

  return (
    <>
      <tr style={colorTodo}>
        <th scope="col"> {todo.id}</th>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>
          <button
            className={buttonColor}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(toggleTodo(todo));
            }}
          >
            {todo.completed.toString().toUpperCase()}
          </button>
        </td>
      </tr>
    </>
  );
};

Todos.propTypes = {
  //todo: PropTypes.isRequired,
};

export default Todos;
