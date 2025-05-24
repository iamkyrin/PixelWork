import { useState } from "react";
import {Link} from 'react-router-dom';
import logo from '/src/assets/icon.png'

function Navbar(){





    return(
        <div className="flex justify-center font-inter">
            <div className="flex gap-12 p-8">
                <div className="w-10">
                    <img alt = "PixelWork Logo" src = {logo}></img>
                </div>
                    <a href = "https://github.com/pixelpawn" className="cursor-pointer lg:ml-0 ml-45 text-4xl font-bold text-indigo-600">PixelWork</a>
                </div>
                
        <nav className="nav">
            <ul className="flex justify-center gap-12 p-10">
                



                
                <a  href = "/"><li className="hover:text-blue-500">Home</li></a>
                <Link to = {"/about"}>
                    <li className="hover:text-blue-500">About</li>
                </Link>
                
            </ul>
        </nav>
        </div>
    )
    
}

export default Navbar