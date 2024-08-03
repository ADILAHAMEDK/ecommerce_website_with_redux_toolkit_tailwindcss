import React from 'react'
import { categories } from '../assets/data'

const Home = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <h1>SHOP BY CATEGORIES</h1>
                </div>
                <ul>
                    {categories.map((item, index)=>(
                        <li key={index}>{item}</li>

                    ))}
                </ul>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Home