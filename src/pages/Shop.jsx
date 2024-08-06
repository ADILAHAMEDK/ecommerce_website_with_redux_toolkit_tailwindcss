import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/ProductSlice";
import { data } from "../assets/data";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts(data))
  }, [])
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4">
      <h2 className="text-2xl font-bolt mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.length > 0 ? products.map((item, index) => (
          <ProductCard item={item} index={index} />
        )) : <h1 className='text-red-700 text-2xl font-bold'>Product not found!</h1> }
      </div>
    </div>
  );
};

export default Shop;
