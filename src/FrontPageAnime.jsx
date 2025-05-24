import { useEffect, useRef, useState } from "react";
import AnimeInfo from "./AnimeInfo";
import {Link} from 'react-router-dom';
import SearchResult from "./SearchResult";
function FrontAnime(){


const [anime, setAnime] = useState([])
const [page, setPage] = useState(1);


    async function getApi(){
        try{


            

            const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=1`);

            if(!response.ok){
                throw new Error("Could not fetch")
            }

            const data = await response.json();


            setAnime(data.data)
        }catch(Error){
            console.log(Error)
        }
    }

    useEffect(() => {
        getApi()
    }, []);
  return (
    <div className="flex justify-center align-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:gap-5 gap-25 p-5 w-[90rem] mt-20">
            {anime.map((anime) => (
                <div className="ml-2 border border-gray-300 rounded-[10px] lg:h-[500px] h-[430px] w-50 lg:w-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <Link to = {`/anime/${anime.mal_id}`}>
                        <img src = {anime.images.jpg.image_url} className="rounded-t-[10px] w-full h-[350px] lg:h-[400px]" alt = {anime.title}></img>
                    </Link>
                    
                    <h1 className="text-center pt-4 text-[13px]">{anime.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]]">{anime.year}</p>

                
                </div>
                

                
        ))}
  

  
  </div>
  </div>


  )
}


export default FrontAnime