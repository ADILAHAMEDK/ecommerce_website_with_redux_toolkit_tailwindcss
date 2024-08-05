import React from 'react'
import manCategory from '../assets/images/pink man2.webp'
import womenCategory from '../assets/images/blue women.webp'
import kidsCategory from '../assets/images/yellow kids.webp'

const CategorySection = () => {
    const categories = [
        {
            title: "Men",
            image: manCategory,
        },
        {
            title: "Women",
            image: womenCategory,
        },
        {
            title: "Kids",
            image: kidsCategory,
        },
    ];

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((item, index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={item.image} alt="img" className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bolt'>{item.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection