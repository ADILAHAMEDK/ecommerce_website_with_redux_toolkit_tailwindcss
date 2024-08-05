import React, { useEffect } from 'react'
import { data } from '../assets/data'
import { getProducts } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

const TopProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products)
    // console.log(products)
    console.log(data)
    
  useEffect(()=>{
    dispatch(getProducts(data))
    },[]);

    if (!products) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        <h2>Top Products</h2>
        <div>
            {products.slice(0,5).map((item, index)=>(
                <div key={index}>
                    {/* <img src={item.image} alt="img" /> */}
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopProducts