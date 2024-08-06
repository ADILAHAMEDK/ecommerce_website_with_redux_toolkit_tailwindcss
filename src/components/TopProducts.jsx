import React, { useEffect } from 'react'
import { data } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/ProductSlice';

const TopProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.product.products)
    console.log(products)
    // console.log(data)
    
  useEffect(()=>{
    dispatch(getProducts(data));
    console.log("top product" + products)
    },[]);

  return (
    <div className='container mx-auto py-4 bg-white'>
        <h2 className='text-2xl font-bold text-red-600 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-3 h-[300px]'>
            {products.length > 0 ? products.slice(0,5).map((item, index)=>(
                <div key={index} className='flex flex-col items-center text-center h-full transform transition-transform duration-300 hover:scale-105
                 cursor-pointer p-4 mt-3 border  shadow-md '>
                    <img src={item.image} alt="img" className='h-full w-9/12 object-cover shadow-md' />
                    <div>
                    <h1 className="mt-4 text-xl font-semibold">{item.name}</h1>
                    <h1 className="mt-2 text-red-500">{item.price}</h1>
                    </div>
                </div>
            )) : <h1 className='text-5xl'>Product not found</h1>}
        </div>
    </div>
  )
}

export default TopProducts