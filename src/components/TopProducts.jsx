import React, { useEffect } from 'react'
import { data } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/ProductSlice';
import ProductCard from './ProductCard';

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
    <div className='container mx-auto py-4'>
      <h2 className='text-2xl font-bolt mb-6 text-center'>Top Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {products.length > 0 ? products.slice(0, 5).map((item, index)=>(
          <ProductCard item={item} index={index}/>
        )) : <h1 className='text-red-700 text-2xl font-bold'>Product not found!</h1>}
      </div>
    </div>
  )
}

export default TopProducts