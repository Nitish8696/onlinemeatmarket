import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { userRequest } from '../requestMethods'

const Payment = () => {
    const cart = useSelector(state => state.cart)
    const { resId, address } = useSelector(state => state.id)
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [pathname, setPathname] = useState(location.pathname)
    const ids = pathname.substring(pathname.lastIndexOf('/') + 1)
    const [message, setMessage] = useState('')

    const handleclick = () => {
        if (resId && resId === ids) {
            makeRequest();
        }
        else {
            setMessage('something went try again')
        }
    }
    const makeRequest = async () => {
        setLoading(true)
        try {
            const axiosInstance = userRequest();
            const response = await axiosInstance.post("/checkout/payment", {
                data: {
                    amount: cart.total,
                    id: ids
                }
            });
            window.location.href = response.data;
        } catch (error) {
            console.error("Error making request:", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div style={{ border: "1px dashed #757575" }} className='w-[90%] m-auto mt-4 p-2'>
            <div>
                <h1 className='text-lg font-medium'>Address :</h1>
                <p className='text-sm font-medium'>{address.city}, {address.pincode}, {address.address}</p>
                <p className='text-sm font-medium'>{address.city}, {address.pincode}</p>
                <p className='text-sm font-medium'>Mobile Number : {address.phone}</p>
            </div>
            <div className='text-xl font-medium mt-2'>
                Total Amount To pay <span className='bg-[#417505] text-white px-2 py-1 rounded'>₹ {cart.total}</span>
            </div>
            <div>
                <button onClick={handleclick} className='text-white bg-[#D11243] px-[15px] py-[10px] mt-3 rounded shadow-md font-medium'>PayNow</button>
            </div>
        </div>
    )
}

export default Payment
