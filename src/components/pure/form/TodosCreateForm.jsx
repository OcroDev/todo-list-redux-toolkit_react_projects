import React from "react";
//Material UI
import Textfield from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, MenuItem, FormControl, Alert } from "@mui/material";
import PropTypes from "prop-types";

//formik
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

//REDUX
import { useDispatch } from "react-redux";
import { addTodo } from "../../../app/reducers/todo/todoSlice";

//CONSTANS
const ID = 0;
export const TodosCreateForm = () => {
  const dispatch = useDispatch();
  const [todoId, setTodoId] = useState(ID);

  const validationSchema = yup.object().shape({
    todoName: yup
      .string()
      .min(6, "Task name too short")
      .max(24, "Task name too long")
      .required("Task Name is required"),
    todoDescription: yup
      .string()
      .min(6, "Task Description too short")
      .required("Task descripition is required"),
  });

  const formik = useFormik({
    initialValues: {
      todoName: "",
      todoDescription: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        addTask(values);
      }, 2000);
    },
  });

  //*Metodos
  function addTask(values) {
    const newTodo = {
      id: todoId,
      name: values.todoName,
      description: values.todoDescription,
      completed: false,
    };

    dispatch(addTodo([newTodo]));
    values.todoName = "";
    values.todoDescription = "";
    setTodoId(todoId + 1);

    formik.setSubmitting(false);

    //add(newTask);
  }

  return (
    <div>
      <h4 className="m-auto">Add new Todo</h4>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-item-center mb-4"
      >
        <div className="form-outline flex-fill form-group mt-2">
          <Textfield
            fullWidth
            id="todoName"
            name="todoName"
            label="Todo Name"
            type="text"
            value={formik.values.todoName}
            onChange={formik.handleChange}
            error={formik.touched.todoName && Boolean(formik.errors.todoName)}
            helperText={formik.touched.todoName && formik.errors.todoName}
            className="mb-4"
          ></Textfield>

          <Textfield
            fullWidth
            id="todoDescription"
            name="todoDescription"
            label="Todo Description"
            type="text"
            value={formik.values.todoDescription}
            onChange={formik.handleChange}
            error={
              formik.touched.todoDescription &&
              Boolean(formik.errors.todoDescription)
            }
            helperText={
              formik.touched.todoDescription && formik.errors.todoDescription
            }
            className="mb-4"
          ></Textfield>
          <Button type="submit" variant="outlined">
            Add Todo
          </Button>
          {formik.isSubmitting ? (
            <Alert severity="info">Creating Task, please wait...</Alert>
          ) : null}
        </div>
      </form>
    </div>
  );
};
