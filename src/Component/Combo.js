import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../combo_image/1.png";
import img2 from "../combo_image/2.png";
import img3 from "../combo_image/3.png";
import img4 from "../combo_image/4.png";
import img5 from "../combo_image/5.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Combo = ({ deviceType }) => {
  return (
        <div>
        <h1 className="flex justify-center font-bold text-4xl pt-2">Combo Offers</h1>
    <div className="w-[85%] mx-auto py-5 ">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out" // Smooth right slide transition
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="">
          <img src={img1} alt="" className="mx-2 border rounded-2xl w-[366px] h-[217px]  " />
        </div>
        <div className="mx-2">
          <img src={img2} alt="" className="mx-2 border rounded-2xl"/>
        </div>
        <div className="mx-2">
          <img src={img3} alt="" className="mx-2 border rounded-2xl"/>
        </div>
        <div className="mx-2">
          <img src={img4} alt="" className="mx-2 border rounded-2xl"/>
        </div>
        <div className="mx-2">
          <img src={img5} alt="" className="mx-2 border rounded-2xl"/>
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default Combo;
