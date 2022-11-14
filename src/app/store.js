import { configureStore } from "@reduxjs/toolkit";

//REDUCERS
import todosReducer from "./reducers/todo/todoSlice";
import userReducer from "./reducers/user/userSlice";
import filterReducer from "./reducers/filter/filterSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    filter: filterReducer,
  },
});
