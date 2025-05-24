import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function BrowseManga(){


const [manga, setManga] = useState([]);

    async function getApi(){
        try{


            

            const response = await fetch(`https://api.jikan.moe/v4/top/manga?filter=bypopularity&page=1`);

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
        getApi()
    }, []);
  return (
        
   <div className="flex justify-center align-center">
   
    
        <div className="lg:ml-0 ml-10 grid grid-cols-2 sm:grid-cols-5 lg:gap-5 gap-30 p-2 w-[90rem] mt-20">
            
            {manga.map((manga) => (
                <div className="border border-gray-300 rounded-[10px] lg:h-[500px] h-[450px] w-50 lg:w-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    <Link to = {`/manga/${manga.mal_id}`}>
                        <img src = {manga.images.jpg.image_url} className="rounded-t-[10px] w-full h-[350px] lg:h-[400px]" alt = {manga.title}></img>
                    </Link>
                    
                    <h1 className="text-center pt-4 text-[13px]">{manga.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]]">{manga.published.prop.from.year || 'N/A'}</p>

                
                </div>
                

                
        ))}
  

  
  </div>
  </div>
  )
}


export default BrowseManga