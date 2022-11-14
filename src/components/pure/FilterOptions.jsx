import React from "react";
import { useDispatch } from "react-redux";
import { setVisibility } from "../../app/reducers/filter/filterSlice";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_INCOMPLETED,
} from "../../models/filterVisibility";

export const FilterOptions = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setVisibility(SHOW_ALL))}
          >
            <button className="page-link">Show All</button>
          </li>
          <li
            className="page-item"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setVisibility(SHOW_COMPLETED))}
          >
            <button className="page-link">Show Completed</button>
          </li>
          <li
            className="page-item"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setVisibility(SHOW_INCOMPLETED))}
          >
            <button className="page-link">Show Incompleted</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
