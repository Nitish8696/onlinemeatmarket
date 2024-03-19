import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import publicRequest from '../requestMethods'
import axios from 'axios';
import { Link } from 'react-router-dom';

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



const BestSelling = () => {
  const [products, setProducts] = useState([])

  const cat = 'Best Deals'
  console.log(cat)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
        setProducts(res.data)
      } catch (error) {

      }
    }
    getProducts()
  }, [cat])
  return (
    <div className='bg-[#F8F8F8]  py-4  '>
      <div className="font-bold sm:text-4xl text-2xl px-5 py-3">
        <h1>Best Selling</h1>
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
            <Link to={`/product/${product._id}`}>
              <div key={index} className=" p-4 mx-2 rounded-[10px] ">
                <div className='relative'>
                  <img src={`http://localhost:5000/${product.img[0]}`} alt={product.title} className="w-full h-auto  rounded-xl" />
                </div>
                <div className="mt-4 m-auto text-center">
                  <h2 className="text-sm font-semibold">{product.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BestSelling;
