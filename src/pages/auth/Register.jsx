import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import RegisterImg from "../../assets/register1.png";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

function Register() {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isActiveButtonTwo, setIsActiveButtonTwo] = useState(false);
  const [authUser, setAuth] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const navigate = useNavigate();
  console.log(authUser);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const data = {
    //   name: auth.name,
    //   email: auth.email,
    //   password: auth.password
    // }
    if (authUser.password !== authUser.cPassword) {
      console.log("error");
    }
    
    createUserWithEmailAndPassword(auth, authUser.email, authUser.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success('Succes')
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };
  const togglePassword = () => {
    setIsActiveButton((prevState) => !prevState);
  };
  const toggleCPassword = () => {
    setIsActiveButtonTwo((prevState) => !prevState);
  };
  return (
    <MainFormRegister>
      {/* <ToastContainer /> */}
      <div>
        <ImgLogin src={RegisterImg} alt="" />
      </div>
      <LoginCard>
        <H2>Register</H2>
        <H3>Enter your credentials</H3>
        <LoginForm onSubmit={onSubmitHandler}>
          <Controls
            type="text"
            value={authUser.name}
            onChange={(e) => setAuth({ ...authUser, name: e.target.value })}
            placeholder="Name"
          />
          <Controls
            type="email"
            value={authUser.email}
            onChange={(e) => setAuth({ ...authUser, email: e.target.value })}
            placeholder="Email"
          />
          <DivPassword id="password">
            <Controls
              type={isActiveButton ? "text" : "password"}
              id="password"
              value={authUser.password}
              onChange={(e) =>
                setAuth({ ...authUser, password: e.target.value })
              }
              placeholder="Password"
            />
            <Toggle type="button" onClick={togglePassword}>
              {isActiveButton ? <Icons /> : <IconsTrue />}
            </Toggle>
          </DivPassword>
          <DivPassword id="password">
            <Controls
              type={isActiveButtonTwo ? "text" : "password"}
              id="password"
              value={authUser.cPassword}
              onChange={(e) =>
                setAuth({ ...authUser, cPassword: e.target.value })
              }
              placeholder="Confirm the password"
            />
            <Toggle type="button" onClick={toggleCPassword}>
              {isActiveButtonTwo ? <Icons /> : <IconsTrue />}
            </Toggle>
          </DivPassword>

          <Button>Register</Button>
          <NavLink to='/login'>
            <h1>login</h1>
          </NavLink>
        </LoginForm>
      </LoginCard>
    </MainFormRegister>
  );
}

export default Register;

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
  width: 400px;
  height: 400px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #703eff;
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
  color: #fec52d;
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

  ::placeholder {
    color: #aaa7bc;
  }
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
