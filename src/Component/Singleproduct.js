import React from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from '../requestMethods';
import { addProduct } from "../utiles/Cartslice";
import { useDispatch } from "react-redux";
import { FaWeight } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";


const SingleProduct = () => {
  const location = useLocation();
  const [activeImg, setActiveImage] = useState('')
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState({})
  const [isPriceSelected, setIsPriceSelected] = useState(false);
  const dispatch = useDispatch()
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [color, setColor] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {

      }
    }
    getProduct()
  }, [id])

  const handleImageClick = (image) => {
    setActiveImage(image);
  };
  const handlePriceSelection = (price) => {
    setPrice(price);
    setIsPriceSelected(true);
    setSelectedPrice(price);
    setColor(true)
  }
  const handleQuantity = (val) => {
    if (val === "dec") {
      setQuantity((prev) => {
        if (prev <= 1) {
          return 1
        }
        else {
          return prev - 1
        }
      })
    }
    if (val === "inc") {
      setQuantity((prev) => {
        return prev + 1
      })
    }
  }

  const handleClick = () => {
    const productwithprice = { ...product, price, quantity }
    dispatch(addProduct({ productwithprice, quantity }))
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row  sm:px-10 px-3 lg:w-[90%] m-auto mt-5 lg:gap-10 gap-2">
        {product && (
          <div className="flex flex-col lg:w-[50%]">
            <img
              src={`http://localhost:5000/${activeImg ? activeImg : product.img && product.img[0]}`}
              alt=""
              className="w-full lg:h-[400px] h-[250px] aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-24 mt-2">
              {product.img && product.img.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/${image}`}
                  alt=""
                  className="lg:w-30 w-24 h-24 rounded-md cursor-pointer object-cover"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        )}
        {/* ABOUT */}
        {product && (
          <div className="flex flex-col gap-4 pt-2 lg:w-[50%]">
            <div>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              {/* {
              <div className="flex gap-2 mt-2">
                <div className="bg-[#f8f8f8] flex items-center px-3 py-1 gap-2 rounded text-sm">
                  <FaWeight />
                  <span>Weight</span>
                </div>
                <div className="bg-[#f8f8f8] flex items-center px-3 py-1 gap-2 rounded text-sm">
                  <GiForkKnifeSpoon />
                  <span>12-18 Pieces</span>
                </div>
                <div className="bg-[#f8f8f8] flex items-center px-3 py-1 gap-2 rounded text-sm">
                  <BiSolidDish />
                  <span>Serves 4</span>
                </div>
              </div>
            } */}
              {product?.inStock && <p>{product?.inStock ? '' : 'Out Of stock'}</p>}
              <div dangerouslySetInnerHTML={{ __html: product?.desc }} className="mt-2"></div>
            </div>
            <div className="bg-[#f1f1f1ec] flex items-center px-3 py-1 gap-2 rounded text-sm w-[60%] lg:w-[30%]">
              <FaWeight />
              <h4 className="text-sm ">Select Weight/Pack</h4>
            </div>
            <div className="flex gap-2 items-center">
              {
                product?.priceOptions?.map((price) => {
                  const isSelected = selectedPrice && selectedPrice._id === price._id;
                  return <div key={price._id} onClick={() => handlePriceSelection(price)} className={`bg-[#D11243] px-[10px] py-[5px] text-white rounded font-medium shadow-xl
                ${isSelected ? 'bg-green-800' : ''}
                `}>
                    <button>{price.weight === '1kg' || price.weight === '500g' ? 'Weight' : 'Pack'} {price.weight} = Rs {price.price}</button>
                  </div>
                })
              }
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-12 gap-2">
              <div className="flex flex-row items-center">
                <button
                  className="bg-[#d1124213] py-2 sm:px-4 px-3 rounded-lg text-violet-800 text-3xl"
                  onClick={() => handleQuantity("dec")}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{quantity}</span>
                <button
                  className="bg-[#d1124213] py-2 sm:px-4 px-3 rounded-lg text-violet-800 text-3xl"
                  onClick={() => handleQuantity("inc")}
                >
                  +
                </button>
              </div>
              <Link to={'/cart'}>
                <button className={`${color ? 'bg-[#D11243]' : 'bg-[#d1d1d1]'} text-white font-semibold py-3 px-8 rounded-xl shadow-2xl cursor-pointer`} disabled={!isPriceSelected}
                onClick={handleClick}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col lg:flex-row  sm:px-10 px-3 lg:w-[90%] m-auto mt-5 lg:gap-10 gap-2'>
        <h1>Related Products</h1>
      </div>
    </>
  );
};

export default SingleProduct;
