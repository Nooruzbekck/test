import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import LoginImg from "../../assets/loginn.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const navigate = useNavigate();

  const [authLogin, setAuth] = useState({
    email: "",
    password: "",
  });
  const togglePassword = () => {
    setIsActiveButton((prevState) => !prevState);
  };
  const handleSubmitLoginAuth = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, authLogin.email, authLogin.password)
      .then(() => {
        navigate("/test-builder");
        toast.success("sucses");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("SUCCESS");
        navigate("/test-builder");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <MainFormRegister>
      <div>
        <ImgLogin src={LoginImg} alt="" />
      </div>
      <LoginCard>
        <H2>Login</H2>
        <H3>Enter your credentials</H3>
        <LoginForm onSubmit={handleSubmitLoginAuth}>
          <Controls
            type="email"
            value={authLogin.email}
            onChange={(e) => setAuth({ ...authLogin, email: e.target.value })}
            placeholder="login"
          />
          <DivPassword id="password">
            <Controls
              type={isActiveButton ? "text" : "password"}
              id="password"
              value={authLogin.password}
              onChange={(e) =>
                setAuth({ ...authLogin, password: e.target.value })
              }
              placeholder="Password"
            />
            <Toggle type="button" onClick={togglePassword}>
              {isActiveButton ? <Icons /> : <IconsTrue />}
            </Toggle>
          </DivPassword>
          <Button>LOGIN</Button>
          <FaGoogleButton onClick={SignInWithGoogle}>
            <span>
              <FaGoogle color="#fe3636" />
            </span>
            LOGIN WITH GOOGLE
          </FaGoogleButton>
          <DivRegister>
            <h4>Don't have an account? </h4>
            <NavLink to="/register">
              <RegisterH3>Register</RegisterH3>
            </NavLink>
          </DivRegister>
        </LoginForm>
      </LoginCard>
    </MainFormRegister>
  );
}

export default Login;
const MainFormRegister = styled.div`
  /* width: 100%; */
  height: 1000px;
  display: flex;
  justify-content: center;
  place-items: center;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Poppins;
  color: #3a334e;
  background-color: #e9f3fb;
  animation: rotate 1s infinite alternate linear;
  margin-left: -190px;
`;
const ImgLogin = styled.img`
  width: 300px;
  height: 300px;
`;
// const Form = styled.form`
//   width: 400px;
//   height: 700px;
//   display: flex;
//   margin: 0 auto;
//   flex-direction: column;
//   justify-content: center;
// `;
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #fe3636;
  color: #f9f9f9;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  transition: all 0.375s;
  position: relative;
  left: 20px;
  border-radius: 14px;
`;
const Controls = styled.input`
  border: 0;
  border-radius: 8px;
  outline: none;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #edeaf7;
  color: #5a4f79;
  font-family: inherit;
  font-size: 19px;
  font-weight: 600;
  transition: 0.4s;
`;
const LoginCard = styled.div`
  width: 400px;
  padding: 100px 30px 64px;
  border-radius: 1.25rem;
  position: relative;
  left: 250px;
  text-align: center;
  background-color: white;
  -webkit-box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
  -moz-box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
  box-shadow: -12px 6px 89px 0px rgba(34, 60, 80, 0.29);
`;
const H2 = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin: 0 0 6px;
  color: #fe3636;
`;
const H3 = styled.h3`
  color: #837f90;
  margin: 0 0 40px;
  font-weight: 500;
  font-size: 1rem;
`;
const LoginForm = styled.form`
  width: 100%;
  margin: 0;
  display: grid;
  gap: 16px;
  position: relative;
  right: 16px;
`;
const DivPassword = styled.div`
  position: relative;
`;
const Toggle = styled.button`
  position: absolute;
  top: 50%;
  right: 3px;
  translate: 0 -50%;
  width: 60px;
  height: 57px;
  border: none;
  background-size: 85px;
  background-position: center;
  background-color: #edeaf7;
  background-repeat: no-repeat;
`;
const Icons = styled(AiFillEye)`
  width: 20px;
  height: 20px;
  background-color: #edeaf7;
`;
const IconsTrue = styled(AiFillEyeInvisible)`
  width: 20px;
  height: 20px;
  background-color: #edeaf7;
`;
const DivRegister = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 15px;
`;
const RegisterH3 = styled.h3`
  color: #fe3636;
  font-size: 19px;
  font-weight: 600;
`;

const FaGoogleButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  color: gray;
   margin-left: 20px;
`;
