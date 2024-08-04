import React from "react";
import { assets, categories } from "../assets/data";

const Home = () => {
  return (
    <div className="bg-white my-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <h1 className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </h1>
          <ul className="space-y-2 bg-gray-100 p-3 border">
            {categories.map((item, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96">
          <img src={assets.banner1} alt="img" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
