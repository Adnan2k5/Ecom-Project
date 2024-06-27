import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import nikelogo from '../../assests/nikelogo.png';





export function Navbar() {
    return (
        <nav className=" navbar rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100  p-5">
            <div className="logo  flex justify-end items-center w-[10%]">
                <Link to='/'><img  src={nikelogo}width={100} height={50} alt='logo'/> </Link>
            </div>
            <div className="sections w-[33%]">
                <ul className="flex justify-around">
                    <li> <Link className="font-Playwrite" to='men'>Women</Link> </li>
                    <li> <Link className="font-Playwrite" to='men'>Men</Link> </li>
                    <li> <Link className="font-Playwrite" to='men'>Kids</Link> </li>
                    <li> <Link className="font-Playwrite" to='men'>Collection</Link> </li>
                </ul>
            </div>
            <div className="user w-[10%]">
                <ul className="flex justify-around">
                    <li> <Link to='/'>Cart</Link> </li>
                    
                    <li> <Link to='login'>Login</Link> </li>
                </ul>
            </div>
        </nav>

    )
}