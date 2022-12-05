import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "../slider/Slider";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Footer from "../footer/Footer";

function Home() {
  const [displayName, setDisplayName] = useState("");

   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       setDisplayName(user)
   } )},[displayName]);
  return (
    <div>
      {displayName ? (
        <>
          <MainHome>
            <Header />
            <H1>
              <b>TEST-BUILDER</b>
            </H1>
            <DivButton>
              <NavLink to="/test-build">
                <Button>START TEST</Button>
              </NavLink>
            </DivButton>
            <SliderMain>
              <Slider />
            </SliderMain>
          </MainHome>
        </>
      ) : (
        <>
          <MainHome>
            <Header />
            <H1>
              <b>TEST-BUILDER</b>
            </H1>
            <DivButton>
              <NavLink to="/register">
                <Button>START TEST</Button>
              </NavLink>
            </DivButton>
            <SliderMain>
              <Slider />
            </SliderMain>
          </MainHome>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;

const MainHome = styled.div`
  margin-bottom: 100px;
`;
const SliderMain = styled.div`
  width: 100%;
  /* height: 100px; */
  height: 100%;
  /* background-size: cover; */
`;
const DivButton = styled.div`
  position: absolute;
  /* right: -1px; */
  right: 400px;
  /* bottom: -1px; */
  bottom: 300px;
`;
const Button = styled.button`
  width: 250px;
  height: 70px;
  background: #fff;
  color: black;
  font-size: 23px;
  font-weight: 900;
  border-radius: 8px;
  border: none;

  /* position: relative;
  margin: auto;
  width: 120px;
  line-height: 64px;
  text-align: center;
  color: #1a1a1a;
  font-size: 20px;
  border: 2px solid #f6a9bd;
  border-radius: 10px;
  background: #f6a9bd;
  transition: all 0.3s;
  cursor: pointer;
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #fff;
    transition: all 0.5s;
    -webkit-animation: clippath 3s infinite linear;
    animation: clippath 3s infinite linear;
    border-radius: 10px;
  }
  ::after {
    -webkit-animation: clippath 3s infinite -1.5s linear;
    animation: clippath 3s infinite -1.5s linear;
  }
  @-webkit-keyframes clippath {
    0%,
    100% {
      -webkit-clip-path: inset(0 0 98% 0);
      clip-path: inset(0 0 98% 0);
    }
    25% {
      -webkit-clip-path: inset(0 0 98% 0);
      clip-path: inset(0 0 98% 0);
    }
    50% {
      -webkit-clip-path: inset(0 0 98% 0);
      clip-path: inset(0 0 98% 0);
    }
    75% {
      -webkit-clip-path: inset(0 0 98% 0);
      clip-path: inset(0 0 98% 0);
    }
     */
  /* } */
`;
const H1 = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  left: 200px;
  top: 170px;
`;
