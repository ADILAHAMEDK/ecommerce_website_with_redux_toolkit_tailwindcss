import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartDetailPage } from '../redux/CartSlice'

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  // const [productDetail, setProductDetail] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const productDetailID = products.find((item) => item.id === parseInt(id));
  //   console.log("productDetailId", productDetailID);
  //   setProductDetail(productDetailID);
  // }, [id, products]);

  const productDetail = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
      if (productDetail) {
          dispatch(addToCartDetailPage({productDetail, quantity}));
      }
  };

  if (!productDetail) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="h-full"
          />
        </div>
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-2xl font-semibold mb-2">{productDetail.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${productDetail.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <input
              id="quantity"
              min="1"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-1 w-16"
            />
            <button onClick={()=>handleAddToCart()} className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
