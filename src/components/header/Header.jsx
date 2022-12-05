import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import LogoProject from '../../assets/logoProject.jpeg';
import styled from "styled-components";
import user from '../../assets/user.png'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
// import Slider from '../slider/Slider';


function Header() {
  const [displayName, setDisplayName] = useState('')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user.displayName === null){
          const u1 = user.email.substring(0, user.email.indexOf('@'))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName)
        }
      } else {
       setDisplayName(user.displayName);
      }
    });
  }, [])
  return (
    <MainHeader>
      {/* <Slider/> */}
      {user ? (
        <>
          {" "}
          <NavLink to="/">
            <div>
              <ImgLogo src={LogoProject} alt="" />
            </div>
          </NavLink>
          <MainImgUser>
            <ImgUser src={user} alt="" />
            <span> Hi, {displayName}</span>
          </MainImgUser>{" "}
        </>
      ) : (
        <>
          <NavLink to="/">
            <div>
              <ImgLogo src={LogoProject} alt="" />
            </div>
          </NavLink>
          <MainImgUser>
            <ImgUser src={user} alt="" />
            <span> Hi, {displayName}</span>
          </MainImgUser>
          <div>
            <UlAuth>
              {/* <NavLink to='register'>Register</NavLink> */}
              <NavLink to="login">Login</NavLink>
            </UlAuth>
          </div>
        </>
      )}
      {/* <NavLink to="/">
            <div>
              <ImgLogo src={LogoProject} alt="" />
            </div>
          </NavLink>
          <MainImgUser>
            <ImgUser src={user} alt="" />
            <span> Hi, {displayName}</span>
          </MainImgUser>
          <>
            
          </ */}
      <UlAuth>
        {/* <NavLink to='register'>Register</NavLink> */}
        <NavLink to="login">Login</NavLink>
      </UlAuth>
    </MainHeader>
  );
}

export default Header;

const MainHeader = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  background: #84A6D3;
  position: fixed;
  top: 0;
  /* opacity: 0; */
  /* background: rgba(0, 0, 0, 0.4); */
  z-index: 99;
  
`;
const ImgLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 20px;
`
const ImgUser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  

`;
const MainImgUser = styled.div`
  width: 100px;
  height: 100px;
  align-items: center;
  margin-top: 23px;
  margin-left: 790px;
  font-size: 20px;
  color: #ff5846;
`;
const UlAuth = styled.ul`
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-weight: 800;
    color: red;
    margin-top:30px;
    margin-right: 95px;
`
