import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emtyCart from '../assets/images/emtycart.avif'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { removeFromCart } from '../redux/CartSlice'
import { increaseQuantity } from '../redux/CartSlice'
import { decreaseQuantity } from '../redux/CartSlice'

const Cart = () => {
    const { products, totalQuantity, totalPrice } = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const [address, setAddress] = useState('main street, 0012');
    const [isModalOpen, setISModalOpen] = useState(false)

    const handleRemoveFromCart = (id)=>{
        dispatch(removeFromCart(id))
    }

    const HandleIncreaseQuantity = (id)=>{
        dispatch(increaseQuantity(id))
    }

    const HandleDecreamentQuantity = (id)=>{
        dispatch(decreaseQuantity(id))
    }

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        {products.length > 0 ?
         <div>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='flex justify-between items-center space-x-10 border-b mb-4 text-xs font-bold'>
                        <p>PRODUCTS</p>
                        <div className='flex space-x-8'>
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                            <p>SUBTOTAL</p>
                            <p>REMOVE</p>
                        </div>
                    </div>
                    <div>
                        {products.map((item, index)=>(
                            <div key={index} className='flex items-center justify-between p-3 border-b'>
                                <div className='md:flex items-center space-x-4'>
                                    <img src={item.image} alt="img" className='w-16 h-16 object-contain rounded' />
                                    <div className='flex-1 ml-4'>
                                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                                    </div>
                                </div>
                                <div className='flex space-x-12 items-center'>
                                    <p>${item.price}</p>
                                    <div className='flex items-center justify-center border'>
                                        <button onClick={()=>HandleDecreamentQuantity(item.id)} className='text-xl font-bold px-1.5 border-r'>-</button>
                                        <p className='text-xl px-2 '>{item.quantity}</p>
                                        <button onClick={()=>HandleIncreaseQuantity(item.id)} className='text-xl px-1 border-l'>+</button>
                                    </div>
                                    <p>${item.price*item.quantity.toFixed(2)}</p>
                                    <button onClick={()=>handleRemoveFromCart(item.id)} className='text-red-500 hover:text-red-700'><FaTrashAlt /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                    <div className='flex justify-between mb-5 border-b pb-1'>
                        <span className='text-sm'>Total Items:</span>
                        <span>{totalQuantity}</span>
                    </div>
                    <div className='mb-4 border-b pb-2'>
                        <p>Shipping:</p>
                        <p className='ml-2'>Shipping to{""}</p>
                        <span className='text-xs font-bold'>{address}</span>
                        <button onClick={()=>setISModalOpen(true)} className='text-blue-500 hover:underline mt-1 ml-2'>change address</button>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span>Total price:</span>
                        <span>{totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Proceed to checkout </button>
                </div>
            </div>
            
            {isModalOpen ? <Modal setISModalOpen={setISModalOpen}>
            <ChangeAddress setAddress={setAddress} setISModalOpen={setISModalOpen}/>
            </Modal> : <></>}
        </div>
          :
         <div className='flex justify-center items-center'>
            <img src={emtyCart} alt="img" className='h-96' />
            </div>}
    </div>
  )
}

export default Cart