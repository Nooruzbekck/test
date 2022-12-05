import React from "react";
import styled from "styled-components";

function Footer() {
  const data = new Date()
  const year = data.getFullYear()

  return (
    <MainFooter>
      <div>
        <h2>
          &copy; {year}
        </h2>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non placeat
        blanditiis sit, impedit expedita nemo praesentium, vel cumque libero,
        nisi facere quibusdam pariatur quis nam ea distinctio perspiciatis ut
        ducimus!
      </p>
    </MainFooter>
  );
}

export default Footer;
const MainFooter = styled.div`
width: 100%;
height: 200px;
 background-color: rgb(54, 35, 96);
 position: relative;
 top: 200px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
`
