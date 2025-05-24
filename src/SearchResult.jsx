import { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SearchBar from "./SearchBar";

function SearchResult(){
        const {input} = useParams()
        const [anime, setAnime] = useState([]);
        const [manga, setManga] = useState([])

        const [activeTab, setActiveTab] = useState("tab1");

        const tabs = [
            {id: "tab1" , label: "Anime"},
            {id: "tab2" , label: "Manga"}
        ]

        const tabContent = {
        tab1: (
    <div className="flex justify-center align-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:gap-5 gap-30 p-2 w-[90rem] mt-20 lg:ml-0 ml-8">
            {anime.map((anime) => (
                <div className="border border-gray-300 rounded-[10px] lg:h-[500px] h-[470px] w-50 lg:w-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <Link to = {`/anime/${anime.mal_id}`}>
                        <img src = {anime.images.jpg.image_url} className="rounded-t-[10px] w-full h-[350px] lg:h-[400px]" alt = {anime.title}></img>
                    </Link>
                    
                    <h1 className="text-center pt-4 text-[13px]">{anime.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]]">{anime.year || "N/A"}</p>

                
                </div>
                

                
        ))}
  

  
  </div>
  </div>
         

        ),
    
    tab2: (
        <div className="flex justify-center align-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:gap-5 gap-30 p-2 w-[90rem] mt-20 lg:ml-0 ml-8">
            {manga.map((manga => (
                
                <div className="border border-gray-300 rounded-[10px] lg:h-[500px] h-[470px] w-50 lg:w-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
                        <Link to = {`/manga/${manga.mal_id}`}>
                            <img className = "rounded-t-[10px] w-full h-[350px] lg:h-[400px]"src = {manga.images.jpg.image_url}></img>
                        </Link>
                    <h1 className="text-center pt-4 text-[13px]">{anime.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]]">{anime.year || "N/A"}</p>
                </div>
            )))}

        </div>
        </div>
    
        )
    }
       
       


    async function getAnimes(){
            try{
    
    
                
    
                const response = await fetch(`https://api.jikan.moe/v4/anime?q=${input}`.toLowerCase());
    
                if(!response.ok){
                    throw new Error("Could not fetch")
                }
    
                const data = await response.json();
    
    
                setAnime(data.data)
            }catch(Error){
                console.log(Error)
            }
        }

            async function getMangas(){
            try{
    
    
                
    
                const response = await fetch(`https://api.jikan.moe/v4/manga?q=${input}`.toLowerCase());
    
                if(!response.ok){
                    throw new Error("Could not fetch")
                }
    
                const data = await response.json();
    
    
                setManga(data.data)
            }catch(Error){
                console.log(Error)
            }
        }


        useEffect(() => {

        getAnimes(), getMangas()

    }, [input])
    
    
   return(
   <div>
        <div role = "tablist">
            <SearchBar/>
            <span className="flex font-bold text-4xl mb-20 mt-20 ml-10">Search Results for "{input}"</span>
            {tabs.map((tab) => (
                
                    <button
                key = {tab.id}
                className={`px-4 py-2 font-semibold ${
                            activeTab === tab.id ? "lg:ml-50 ml-5 mr-0 lg:w-[40rem] w-[30rem] bg-blue-500 text-white" : "lg:ml-50 ml-5 lg:w-[40rem] w-[30rem] bg-gray-100 text-black"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                        >{tab.label}</button>
                    ))}
                </div>

                <div>{tabContent[activeTab]}</div>
    </div>
   )
}
export default SearchResult