import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function BrowseMovies(){


const [anime, setAnime] = useState([]);

    async function getApi(){
        try{


            

            const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&filter=bypopularity`);

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
  )
}


export default BrowseMovies