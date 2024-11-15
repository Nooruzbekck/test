import React from "react";
import { Button, Paper, styled, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../redux/thunks/authThunk";
import {
  ErrorMessage,
  StyledLink,
  StyledTypography,
  WrapperInput,
} from "./SignIn";
import { useFormik } from "formik";
import { validationSignUp } from "../../utils/constants/validation";

export const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSignUp,
    onSubmit: (userData) => {
      dispatch(signUpThunk(userData));
    },
  });

  return (
    <Paper
      elevation={3}
      sx={{
        width: "400px",
        padding: "20px",
        margin: "100px  auto",
      }}
    >
      <Typography variant="h5" textAlign={"center"} margin="15px 0">
        Регистрация
      </Typography>

      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <WrapperInput>
          <StyledInput
            name="name"
            label="Имя"
            fullWidth
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : null}
        </WrapperInput>
        <WrapperInput>
          <StyledInput
            label="Почта"
            fullWidth
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </WrapperInput>
        <WrapperInput>
          <StyledInput
            name="password"
            label="Пароль"
            fullWidth
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
        </WrapperInput>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "13px" }}
        >
          Зарегистрироваться
        </Button>

        <StyledTypography>
          <StyledLink to={"/sign-in"}>Войти в аккаунт</StyledLink>
        </StyledTypography>
      </form>
    </Paper>
  );
};

const StyledInput = styled(TextField)({
  margin: "10px auto",
});
