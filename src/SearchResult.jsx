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
  <div className="flex justify-center align-center items-center overflow-hidden">
        <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-5 xl:gap-5 gap-10 p-5 xl:w-[90rem] w-[40rem] md:w-[100rem] max-w-full mt-20">
            {anime.map((anime) => (
                <div className="border border-gray-300 rounded-[10px] xl:h-[500px] h-[350px] md:h-[300px] w-50 xl:w-full max-w-full hover:shadow-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                    <Link to = {`/anime/${anime.mal_id}`}>
                        <img src = {anime.images.jpg.image_url} className="object-cover rounded-t-[10px] w-full h-[250px] xl:h-[400px] md:h-[200px]" alt = {anime.title}></img>
                    </Link>
                    
                    <h1 className="text-center pt-4 text-[13px] break-words max-w-full">{anime.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]">{anime.year || 'N/A'}</p>

                
                </div>
                

                
        ))}
  

  
  </div>
  </div>
         

        ),
    
    tab2: (
        <div className="flex justify-center align-center items-center overflow-hidden">
        <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-5 xl:gap-5 gap-10 p-5 xl:w-[90rem] w-[40rem] md:w-[100rem] max-w-full mt-20">
            {manga.map((manga => (
                
                <div className="border border-gray-300 rounded-[10px] xl:h-[500px] h-[350px] md:h-[300px] w-50 xl:w-full max-w-full hover:shadow-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                        <Link to = {`/manga/${manga.mal_id}`}>
                            <img className = "object-cover rounded-t-[10px] w-full h-[250px] xl:h-[400px] md:h-[200px]"src = {manga.images.jpg.image_url}></img>
                        </Link>
                    <h1 className="text-center pt-4 text-[13px] break-words max-w-full">{anime.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]">{anime.year || "N/A"}</p>
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
            <div className="xl:ml-10 xl:mt-0 mt-10">

                
                {tabs.map((tab) => (
                    
                        <button
                    key = {tab.id}
                    className={`max-w-full xl:px-4 xl:py-5 xl:py-8 md:py-8 py-5 font-semibold ${
                                activeTab === tab.id ? "2xl:w-[450px] md:w-[230px] w-[150px] xl:w-[350px] max-w-full text-xs xl:text-xl md:text-xl bg-blue-500 text-white" : "text-xs xl:text-xl md:text-xl 2xl:w-[450px] md:w-[230px] w-[150px] xl:w-[350px] bg-gray-100 text-black"
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                            >{tab.label}</button>
                        ))}
                </div>
                </div>

                <div>{tabContent[activeTab]}</div>
    </div>
   )
}
export default SearchResult