'use client'

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-6 h-6 cursor-pointer block !text-black ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-6 h-6 cursor-pointer block !text-black ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export default class ReactSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className="mx-auto max-w-containerlg">
        <h2 className="text-center"> Single Item</h2>
        <Slider {...settings}>
          <div className="flex items-center justify-center bg-red-300 h-sm">
            <h3 className="text-center">1</h3>
          </div>
          <div className="flex items-center justify-center bg-blue-300 h-sm">
            <h3 className="text-center">2</h3>
          </div>
          <div className="flex items-center justify-center bg-yellow-300 h-sm">
            <h3 className="text-center">3</h3>
          </div>
          <div className="flex items-center justify-center bg-green-300 h-sm">
            <h3 className="text-center">4</h3>
          </div>
          <div className="flex items-center justify-center bg-orange-300 h-sm">
            <h3 className="text-center">5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
