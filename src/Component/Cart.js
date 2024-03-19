import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import cartImg from "../cate_image/cart.png"
import { addProductToCart, removeProductFromCart,deleteProductFromCart } from '../utiles/Cartslice'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)

  const dispatch = useDispatch()

  const handleDelete = (productId) => {
    dispatch(deleteProductFromCart({productId}))
  }

  const handleAddProduct = (productId, weight) => {
    dispatch(addProductToCart({ productId, weight }));
  };

  const handleRemoveProduct = (productId, weight) => {
    dispatch(removeProductFromCart({ productId, weight }));
  };
  if (cart.products.length !== 0) {
    return (
      <div className="lg:w-[90%] w-[95%] m-auto mt-4">
        <h1 className="text-2xl font-semibold mb-3">Order Summary</h1>
        <div className="flex flex-col">
          {
            cart.products.map((product, index) => {
              return <div key={product._id} className="flex justify-between items-center rounded shadow-[0px_5px_14px_0px_rgba(0,0,0,0.28)] lg:px-4 px-2 py-2 mt-3">
                <div className="flex lg:gap-3 gap-1">
                  <div className="bg-gray-100 h-[25px] p-2 flex items-center justify-center rounded">
                    <p className="text-gray-400">{index}</p>
                  </div>
                  <div className="flex lg:gap-2 gap-1 items-start">
                    <img src={`http://localhost:5000/${product.img[0]}`} alt="" className="lg:w-[80px] w-[50px] h-[50px] lg:h-[80px] object-cover rounded" />
                    <div>
                      <h1 className="lg:text-xl text-lg font-semibold">{product.title}</h1>
                      <div className="mt-2 flex items-center">
                        <p className="px-1 py-[2px] text-sm text-[#6d6e71]" style={{border : "1px solid #6d6e71"}}>Weight/Pack:{product.price.weight}</p>
                        <p className="text-[#D11243] font-medium"> = ₹{product.price.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end gap-3">
                  <div className="text-xl">
                    <RxCross2 onClick={() => handleDelete(product._id)} className="cursor-pointer"/>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button className="bg-gray-100 p-1 text-[#D11243]" onClick={() => handleRemoveProduct(product._id, product.price.weight)}><FiMinus /></button>
                    <p>{product.quantity}</p>
                    <button className="bg-gray-100 p-1 text-[#D11243]" onClick={() => handleAddProduct(product._id, product.price.weight)}><FaPlus /></button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div style={{ border: "1px dashed #757575" }} className="mt-4 p-2">
          <div className="font-medium">
            Bill Details
          </div>
          <div className="flex justify-between text-sm font-light mt-2 text-gray-500">
            <h1>Subtotal</h1>
            <h1>₹ {cart.total}</h1>
          </div>
          <hr className="mt-3 mb-3" />
          <div className="flex justify-between text-base font-medium mt-2 ">
            <h1>Total</h1>
            <h1 className="text-[#D11243]">₹ {cart.total}</h1>
          </div>
        </div>
        <Link to={'/checkout'}>
          <div className="flex justify-end mt-5">
            <button className="text-white bg-[#D11243] px-[15px] py-[10px] rounded shadow-md font-medium">Proceed To Checkout</button>
          </div>
        </Link>
      </div>
    );
  }
  else {
    return <div className="w-[90%] flex flex-col items-center m-auto">
      <h1 className='mt-5 text-2xl font-medium'>Your Cart Is Empty</h1>
      <img src={cartImg} alt="" className="w-[200px] h-[200px] object-cover mt-3" />
      <Link to={'/'}>
        <button className="text-white bg-[#D11243] px-[15px] py-[10px] mt-5 rounded shadow-md font-medium">Show Now</button>
      </Link>
    </div>
  }

};

export default Cart;
