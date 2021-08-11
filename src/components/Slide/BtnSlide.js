import React from "react";
// import "./Slide.css";
// import leftArrow from "./icons/left-arrow.svg";
import {BsChevronLeft} from 'react-icons/bs';
// import rightArrow from "./icons/right-arrow.svg";
import {BsChevronRight} from 'react-icons/bs';

const BtnSlider = ({ direction, moveSlide }) => {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <BsChevronRight/> : <BsChevronLeft/>}
    </button>
  );
}

export default BtnSlider;