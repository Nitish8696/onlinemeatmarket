import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import array from "../demo/array";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="bg-[#FEFAEE] my-4 py-4">
      <div className="font-bold sm:text-5xl sm:px-5 text-2xl px-3">
        <h1>Shop By Categories</h1>
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-4 gap-4 my-5 cursor-pointer px-3">
        {array.map((product, index) => (
          <Link
            to={`/products/${product.category}`} // Navigate to "/products/{category}" route
            key={index}
            onClick={() => handleCategoryClick(product.category)}
          >
            <div className="text-center">
              <div className="rounded-full sm:w-[160px] sm:h-[160px] mx-auto mb-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.category}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold">{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
