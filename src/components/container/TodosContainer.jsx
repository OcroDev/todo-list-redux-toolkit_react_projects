import React, { useState } from "react";
import Todos from "../pure/Todos";
import { useDispatch, useSelector } from "react-redux";

import { TodosCreateForm } from "../pure/form/TodosCreateForm";
import { FilterContainer } from "./FilterContainer";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_INCOMPLETED,
} from "../../models/filterVisibility";

export const TodosContainer = () => {
  const todosSelector = useSelector((state) => state.todos);
  const filterVisibility = useSelector((state) => state.filter);

  return (
    <>
      <br />
      <div className="container">
        <FilterContainer />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {todosSelector.todos.map((todo, index) => {
              switch (filterVisibility.visibility) {
                case SHOW_ALL:
                  return <Todos key={index} todo={todo}></Todos>;
                case SHOW_COMPLETED:
                  return todo.completed ? (
                    <Todos key={index} todo={todo}></Todos>
                  ) : null;
                case SHOW_INCOMPLETED:
                  return !todo.completed ? (
                    <Todos key={index} todo={todo}></Todos>
                  ) : null;

                default:
                  return <Todos key={index} todo={todo}></Todos>;
              }
            })}
          </tbody>
        </table>
        <hr />
      </div>

      <div className="container">
        <TodosCreateForm></TodosCreateForm>
      </div>
    </>
  );
};
