import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    
    <header className="xl:ml-0 flex flex-col items-center justify-center text-center">
      <div className="mt-50">
        <h1 className="xl:text-6xl text-5xl font-bold md:text-4xl text-center xl:text-center">Discover Your Favourite <span className="text-blue-400">Animes</span></h1>
        <p className="text-gray-500 mt-10 xl:text-2xl md:text-2xl text-3xl text-center">Track, Discover, and explore your next obsession</p>
      </div>

      <Link to = {'/anime/search'}>
        <button className="hover:bg-blue-500 hover:border-blue-500 border border-blue-600 mt-10 bg-blue-600 text-white rounded p-4 cursor-pointer text-xl w-50">
          Get started
        </button>
      </Link>








      <div className="xl:flex mt-30 lg:justify-center flex justify-center">
        <Link to = {"/schedule"}>
            <button className="transform transition-transform duration-300 hover:scale-105 color-black border border-gray-300 mt-10 rounded p-4 cursor-pointer text-[12px] md:text-[17px] xl:text-[16px] m-5 w-20 md:w-30 xl:w-50">
                Seasonal Anime</button>
        </Link>
            
        <Link to = {'/manga'}>
            <button className="transform transition-transform duration-300 hover:scale-105 border border-gray-300 mt-10 rounded p-4 cursor-pointer text-[12px] md:text-[17px] xl:text-[16px] m-5 w-20 md:w-30 xl:w-50">
                Browse Manga</button>
        </Link>
        <Link to = {'/movies'}>
              <button className="transform transition-transform duration-300 hover:scale-105 border border-gray-300 mt-10 rounded p-4 cursor-pointer text-[12px] md:text-[17px] xl:text-[16px] m-5 w-20 md:w-30 xl:w-50">
                Browse Movies</button>
        </Link>

      </div>
    </header>
  );
}

export default Header