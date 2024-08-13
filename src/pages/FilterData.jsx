import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import noProduct from "../assets/images/not_found.png";

const FilterData = () => {
  const { filteredData } = useSelector((state) => state.product);
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4">
      {filteredData.length > 0 ? (
        <>
          <h2 className="text-2xl font-bolt mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredData.map((item, index) => (
              <ProductCard item={item} index={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
            <img src={noProduct} alt="img" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
