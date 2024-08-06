import React, { useState } from "react";
import { categories, slides } from "../assets/data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import InfoSections from "../components/InfoSections";
import CategorySection from "../components/CategorySection";
import TopProducts from "../components/TopProducts";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

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
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 flex overflow-hidden relative group">
          <img
            src={slides[currentIndex]} // Access the current slide
            alt="img"
            className="w-full h-full bg-center bg-cover transition ease-in-out duration-500"
          />
          <div className="absolute top-0 w-full h-full flex items-center justify-between px-8">
            <button
              onClick={previousSlide}
              className="hidden group-hover:block text-2xl text-white rounded-full p-2 bg-black/20 cursor-pointer"
            >
              <BsChevronCompactLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="hidden group-hover:block text-2xl text-white rounded-full p-2 bg-black/20 cursor-pointer"
            >
              <BsChevronCompactRight size={30} />
            </button>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center w-full py-4 cursor-pointer">
            {slides.map((_, index) => (
              <RxDotFilled
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${index === currentIndex ? "text-white" : "text-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <InfoSections />
      <CategorySection />
      <TopProducts />
    </div>
  );
};

export default Home;
