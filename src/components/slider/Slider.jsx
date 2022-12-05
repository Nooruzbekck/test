import React, { useEffect, useState } from "react";
import { sliderData } from "./slider-data";
import styled from "styled-components";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScrool = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (autoScrool) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScrool]);
  return (
    <MainSlider>
      {sliderData.map((slide, index) => {
        const { image, desc } = slide;
        return (
          <div key={index} >
            {index === currentSlide && (
              <>
                <SlideImg src={image} alt="" />
                <Desc >
                  <p>{desc}</p>
                  <hr />
                </Desc>
              </>
            )}
          </div>
        );
      })}
    </MainSlider>
  );
}

export default Slider;
const MainSlider = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 100px;
`;
const SlideImg = styled.img`
  width: 100%;
  height: 800px;
  background-size: cover;
`;
const Desc = styled.div`
  
  position: absolute;
  bottom: 50px;
  left: 650px;
  color: white;
`
