import React from "react";

//FORM
import { useFormik } from "formik";
import * as Yup from "yup";
//MATERIAL UI
import { Alert, Button, TextField } from "@mui/material";
//REACT ROUTER
import { useNavigate } from "react-router-dom";
//AXIOS
import axios from "axios";
//REDUX
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/reducers/user/userSlice";

//constantes
const REGISTER_PAGE_PATH = "/register";

export const LoginForm = ({ userState }) => {
  //navigation
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  //redux
  const dispatch = useDispatch((state) => state.user);

  const loginUser = (email, password) => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((response) => {
        const user = { email, password, token: response.data };
        dispatch(setUser(user));
      })
      .catch((error) => console.error(error));
    //todo localStorage.setItem("credentials", values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 1000));
      loginUser(values.email, values.password);
      values.email = "";
      values.password = "";
      formik.setSubmitting(false);
      navigateTo("/");
    },
  });

  return (
    <div>
      <h4 className="m-auto">Login</h4>

      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-item-center mb-4"
      >
        <div className="form-outline flex-fill form-group mt-2">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.taskName}
            onChange={formik.handleChange}
            error={formik.touched.taskName && Boolean(formik.errors.taskName)}
            helperText={formik.touched.taskName && formik.errors.taskName}
            className="mb-4"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.taskName}
            onChange={formik.handleChange}
            error={formik.touched.taskName && Boolean(formik.errors.taskName)}
            helperText={formik.touched.taskName && formik.errors.taskName}
            className="mb-4"
          />
          <Button type="submit" variant="outlined">
            Log in
          </Button>

          <Button
            variant="contained"
            className="m-2"
            onClick={() => navigateTo(REGISTER_PAGE_PATH)}
          >
            Sign Up
          </Button>

          {formik.isSubmitting ? (
            <Alert severity="info">Login your credentials ... </Alert>
          ) : null}
        </div>
      </form>
    </div>
  );
};
