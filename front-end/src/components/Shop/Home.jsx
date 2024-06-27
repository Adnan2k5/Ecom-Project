import React from 'react'
import { Navbar } from './Navbar'
import { FeatProd } from './featProd';
import prod1 from '../../assests/nikeprod1.jpeg'
import prod2 from '../../assests/prod2.png';
import prod3 from '../../assests/prod3.png'


const products = [
    {
        name: 'Nike Air',
        series: 'Max Pre-Day',
        description: '⭐️⭐️⭐️⭐️ (4.5)',
        price: 100,
        image: prod1,
    },
    {
        name: 'Nike Air',
        series: 'Travis Reverse Mocha',
        description: '⭐️⭐️⭐️⭐️ (4.5)',
        price: 150,
        image: prod2,
    },
    {
        name: 'Nike Air',
        series: 'Air Force 1',
        description: '⭐️⭐️⭐️⭐️ (4.5)',
        price: 200,
        image: prod3,
    },
];

export function  Home(){
  return (
    <>
        <Navbar/>
        <FeatProd products={products}/>
    </>
    
    
  )
}



