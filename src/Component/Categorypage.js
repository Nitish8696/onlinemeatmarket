import React from "react";
import { useParams } from "react-router-dom";
import array from "../demo/Products";
import { Breadcrumb, Button } from "react-bootstrap";

const Products = () => {
  const { category } = useParams(); // Access the category parameter from the URL

  // Filter products based on the selected category
  const filteredProducts = array.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return (
    <div className=" py-4 cursor-pointer ">
      <Breadcrumb className="font-semibold text-xl text-black px-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{category}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="font-bold sm:text-4xl text-2xl pb-5 px-4">
        <h1>Shop By Categories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 sm:px-[150px] px-3 ">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg  relative  flex flex-col gap-3 "
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-[333px] h-[220px] m-auto rounded-lg object-cover"

            />
            <div className="mt-1 text-center">
              <h2 className="text-sm font-semibold italic">{product.name}</h2>
              <p className="text-gray-600 font-medium italic">{product.category}</p>
              <div className="flex sm:justify-evenly justify-between items-center ">
              <p className="text-gray-700 font-bold italic">{product.price}</p>
              <button className="italic  bg-[#D11243] text-white rounded-md py-1 px-2">add +</button>

              </div>
            </div>
            {/* <div className="flex gap-2 bg-white p-2 rounded shadow-lg">
  <Button variant="primary" className="py-2 px-4 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold">
    Add to Cart
  </Button>
</div> */}


          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
