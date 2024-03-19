import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'
import { addId, addAddress } from '../utiles/id'
import cartImg from "../cate_image/cart.png"

const Checkout = () => {
    const cart = useSelector(state => state.cart)

    const storedUserData = localStorage.getItem("user");

    const userData = JSON.parse(storedUserData);

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: ''
    });

    const isFormDataFilled = () => {
        return Object.values(formData).every(value => value.trim() !== '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const createOrder = async () => {

        try {
            setLoading(true)
            const axiosInstance = userRequest();
            const res = await axiosInstance.post("/orders", {
                products: cart.products.map((product) => {
                    return {
                        productId: product._id,
                        quantity: product.quantity,
                        weight: product.price.weight
                    }
                }),
                amount: cart.total,
                address: formData,
            });

            console.log(res)

            setLoading(false)
            if (res.data.status === 403) {
                return setMessage(res.data.msg)
            }
            dispatch(addId(res.data._id))
            dispatch(addAddress(res.data.address))
            navigate(`/payment/${res.data._id}`)
        } catch { }
    };
    if (cart.products.length > 0) {
        return (
            <div className='lg:w-[90%] m-auto px-[10px] lg:px-[0]'>
                <h2 className='text-2xl font-semibold mt-3'>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-center gap-2'>
                        <div className='lg:w-[50%] flex justify-center items-center gap-2'>
                            <label htmlFor="fname" className='w-[30%] lg:w-[20%] text-base font-medium'>First Name:</label><br />
                            <input type="text" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' id="fname" name="fname" value={formData.fname} onChange={handleChange} required /><br /><br />
                        </div>

                        <div className='lg:w-[50%] flex justify-center items-center gap-2'>
                            <label htmlFor="lname" className='w-[30%] lg:w-[20%] text-base font-medium'>Last Name:</label><br />
                            <input type="text" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' id="lname" name="lname" value={formData.lname} onChange={handleChange} required /><br /><br />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-center gap-2'>
                        <div className='lg:w-[50%] flex justify-center gap-2 items-center'>
                            <label htmlFor="address" className='w-[30%] lg:w-[20%] text-base font-medium'>Street Address:</label><br />
                            <input type="text" id="address" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' name="address" value={formData.address} onChange={handleChange} required /><br /><br />
                        </div>

                        <div className='lg:w-[50%] flex justify-center gap-2 items-center'>
                            <label htmlFor="city" className='w-[30%] lg:w-[20%] text-base font-medium'>Town/City:</label><br />
                            <input type="text" id="city" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' name="city" value={formData.city} onChange={handleChange} required /><br /><br />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-center gap-2'>
                        <div className='lg:w-[50%] flex justify-center gap-2 items-center'>
                            <label htmlFor="state" className='w-[30%] lg:w-[20%] text-base font-medium'>State:</label><br />
                            <input type="text" id="state" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' name="state" value={formData.state} onChange={handleChange} required /><br /><br />
                        </div>
                        <div className='lg:w-[50%] flex justify-center gap-2 items-center'>
                            <label htmlFor="pincode" className='w-[30%] lg:w-[20%] text-base font-medium'>Pin Code:</label><br />
                            <input type="text" id="pincode" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' name="pincode" value={formData.pincode} onChange={handleChange} required /><br /><br />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-start gap-2'>
                        <div className='lg:w-[50%] flex justify-center gap-2 items-center'>
                            <label htmlFor="phone" className='w-[30%] lg:w-[20%] text-base font-medium'>Phone Number:</label><br />
                            <input type="tel" id="phone" className='border outline-none p-0 h-8 w-[70%] lg:w-[80%]' name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required /><br /><br />
                        </div>
                    </div>
                </form>
                {
                    !userData && <Link to={'/login'}>
                        <p className='text-[#D11243] font-medium text-lg'>Oops ! You are not log in login first</p>
                        <button className='text-white bg-[#D11243] px-[15px] py-[10px] rounded shadow-md font-medium'>Login</button>
                    </Link>
                }
                {message &&
                    <div>
                        <p className='text-[#D11243] font-medium text-lg'>Oops ! {message}</p>
                        <Link to={'/login'}>
                            <button className='text-white bg-[#D11243] px-[15px] py-[10px] rounded shadow-md font-medium'>Login</button>
                        </Link>
                    </div>
                }
                {
                    userData && !message && <button className={`${isFormDataFilled() ? 'text-white bg-[#D11243] px-[15px] py-[10px] mt-3 rounded shadow-md font-medium' :
                        'text-white bg-[#c7c7c7] px-[15px] py-[10px] mt-3 rounded shadow-md font-medium'
                        }`} onClick={createOrder} disabled={!isFormDataFilled()}>{loading ? "loading..." : "Checkout Now"}</button>
                }
            </div>
        )
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

}

export default Checkout
