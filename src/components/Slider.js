import React, { useRef } from "react";
import { sliderdata } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sliders = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="overflow-hidden relative">
      <Slider ref={sliderRef} {...settings}>
        {sliderdata.map((img, index) => (
          <div key={index} className="md:h-[700px] h-[350px]">
            <img
              className="w-full object-center md:h-[700px] h-[350px]"
              src={img.img}
              alt="img"
            />
          </div>
        ))}
      </Slider>

      <FontAwesomeIcon
        onClick={previous}
        className="bg-white absolute top-[330px] left-4  p-2 text-black font-bold
         size-8 hover:bg-red-600 hover:text-white md:block hidden"
        icon="angle-left"
      />
      <FontAwesomeIcon
        onClick={next}
        className="bg-white absolute top-[330px] right-2 p-2 text-black font-bold size-8
         hover:bg-red-600 hover:text-white md:block hidden"
        icon="angle-right"
      />
    </div>
  );
};

export default Sliders;
