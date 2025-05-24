import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SearchBar(){


    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            navigate(`/search/${encodeURIComponent(input)}`)
        }
    }
    return(
       <div className="lg:ml-0 ml-20 flex justify-center mt-12 bg-white w-full rounded p-5">
        <form onSubmit = {handleSubmit}>
            <svg className="text-blue-500 float-left lg:mt-13 mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='40'><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
            <input value = {input} onChange={(e) => setInput(e.target.value)} className = "bg-transparent border-none lg:text-[1.25rem] text-[20px] ml-5 focus:outline-none" placeholder="Search Anime or Manga..."></input>
                <button className = "hover:bg-blue-500 hover:border-blue-500 border border-blue-600 lg:mt-10 mt-15 lg:ml-0 ml-10 bg-blue-600 text-white rounded p-4 cursor-pointer text-xl w-50" type = "submit">Search</button>
        </form>
       </div>
    )
}

export default SearchBar