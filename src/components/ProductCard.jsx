import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({item, index}) => {
  const dispatch = useDispatch()

  const handleAddtoCart = (e, item)=>{
    e.stopPropagation();
    e.preventDefault()
    dispatch(addToCart(item))
    alert("Product Added Succesfully!")
  }
  return (
    <Link to={`/detail/${item.id}`}>
    <div key={index} className='bg-white p-4 rounded relative border transform transition-transform
    duration-300 hover:scale-105 cursor-pointer'>
      <img src={item.image} alt="img" className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{item.name}</h3>
      <p className='text-gray-500'>${item.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
      onClick={(e)=>handleAddtoCart(e, item)}>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to cart</span>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard