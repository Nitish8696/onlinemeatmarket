import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from '../demo/Products';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Arrival = () => {
  return (
    <div className='bg-[#F8F8F8]  py-4  '>
      <div className="font-bold sm:text-4xl text-2xl px-5 py-3">
        <h1>New Arrival</h1>
      </div>
      <div>
      <Carousel
        swipeable={false}
        draggable={false}
        
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out" // Smooth right slide transition
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"} // Assuming default deviceType as desktop
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product, index) => (
          <div key={index} className=" p-4 mx-2 rounded-[10px] ">
          <div className='relative'>
          <img src={product.image[0]} alt={product.name} className="w-full h-auto  rounded-xl" />
          <button className=' bg-white absolute right-[-20px] bottom-[-20px] text-[#D11243] border rounded-xl  text-[20px] px-[12px] pb-2 m-auto shadow-sm'>+</button>
          </div>
          <div className="mt-4 m-auto text-center">
            <h2 className="text-sm font-semibold">{product.name}</h2>
            <p className="text-gray-600 font-medium text-sm">{product.category}</p>
            <p className="text-gray-700 font-bold text-sm py-3">{product.price}</p>
          </div>
        </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Arrival;
