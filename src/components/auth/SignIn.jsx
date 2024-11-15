import React from "react";
import { Button, Paper, styled, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSignIn } from "../../utils/constants/validation";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSignIn,

    onSubmit: (data) => {
      console.log(data);

      dispatch(signInThunk(data));
      navigate("/new-test");
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
        Войти в аккаунт
      </Typography>

      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
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
            label="Пароль"
            fullWidth
            type="password"
            name="password"
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
          sx={{ marginTop: "12px" }}
        >
          Войти
        </Button>

        <StyledTypography variant="inherit">
          <StyledLink to={"/sign-up"}>Зарегистрироваться</StyledLink>
        </StyledTypography>
      </form>
    </Paper>
  );
};

const StyledInput = styled(TextField)({
  margin: "10px auto",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#ADADAD",
});

export const StyledTypography = styled(Typography)({
  textAlign: "center",
  marginTop: "15px",
});

export const WrapperInput = styled("div")({
  position: "relative",
});

export const ErrorMessage = styled("p")({
  position: "absolute",
  bottom: "-8px",
  left: "0",
  color: "red",
  fontSize: "14px",
  fontWeight: "300",
});
