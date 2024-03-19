import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Lowerbar = () => {
  return (
    <div className="bg-white fixed left-0 bottom-0 z-[999] w-full py-2 sm:hidden block">
      <div className="flex justify-evenly items-center text-[25px] text-[#D11243] ">
        <div className="text-[28px]">
          <FaHome />
          <span className="text-[16px]">Home</span>
        </div>
        <div>
          <FaShoppingBag />
          <span className="text-[16px]">Shop</span>
        </div>
        <div>
          <CgProfile />

          <span className="text-[16px]">Profile</span>
        </div>
        <div>
        <FaSearch />

          <span className="text-[16px]">Search</span>
        </div>
        <div>
        <FaShoppingCart />

          <span className="text-[16px]">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Lowerbar;
