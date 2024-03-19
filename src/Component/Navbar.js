import React, { useState } from "react";
import img from "../images/cropped-cropped-Beige_Orange_Modern_Food_Logo-removebg-preview.png";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri"; // Correct import for the close icon
import { addSearchTerm } from "../utiles/id";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    dispatch(addSearchTerm(searchTerm))
    setSearchTerm("")
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    
    <div className="flex items-center justify-between sm:px-10 shadow-md py-2  z-[2000] bg-white w-full overflow-y-hidden">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={img} className="w-[175px] h-[83px]" alt="" />
        </Link>
        <div>
          <AiOutlineMenu
            className="sm:hidden block text-4xl ml-[160px] text-[#D11243]"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <div className="sm:flex sm:justify-center sm:items-center hidden border border-black rounded overflow-hidden h-[40px] pl-1">
        <input
          className=" outline-none w-[400px] h-full"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <Link to={'/search'} className="bg-black text-white px-4 font-semibold h-full flex items-center justify-center" onClick={handleSearch}><button ><IoSearchOutline/></button></Link>
      </div>
      <div className="sm:flex items-center justify-between hidden">
        <Link to="/ShopNow">
          <button className="border border-black rounded px-4 py-2 bg-black text-white font-medium mx-2">
            Shop Now
          </button>
        </Link>
        <button className="border border-black rounded px-4 py-2 font-medium mx-2">
          Our Stores
        </button>
        <CgProfile className="w-[31px] h-[32px] mx-2" />
    <Link to="/cart">    <FaShoppingBag className="w-[31px] h-[32px] mx-2" /> </Link>
      </div>
      {sidebar && (
  <div className={`fixed top-0 left-0 z-50 bg-white w-4/5 h-full sm:hidden transform transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="flex flex-col h-full">
      <div className="pl-6">
        {/* Close button */}
        <RiCloseLine className="absolute top-4 right-10 text-4xl text-[#D11243] cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className="flex-grow flex flex-col">
        {/* Sidebar content */}
        <ul className="text-black ml-10 mt-10">
          <li className="mb-6">
            <Link to="/" className="text-2xl hover:text-blue-500" onClick={toggleSidebar}>Home</Link>
          </li>
          {/* Add more sidebar links here */}
        </ul>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default Navbar;
