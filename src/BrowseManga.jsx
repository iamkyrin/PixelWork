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
        
   <div className="flex justify-center align-center items-center overflow-hidden">
   
    
        <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-5 xl:gap-5 gap-10 p-5 xl:w-[90rem] w-[40rem] md:w-[100rem] max-w-full mt-20">
            
            {manga.map((manga) => (
                <div className="border border-gray-300 rounded-[10px] xl:h-[500px] h-[350px] md:h-[300px] w-50 xl:w-full max-w-full hover:shadow-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                    <Link to = {`/manga/${manga.mal_id}`}>
                        <img src = {manga.images.jpg.image_url} className="object-cover rounded-t-[10px] w-full h-[250px] xl:h-[400px] md:h-[200px]" alt = {manga.title}></img>
                    </Link>
                    
                    <h1 className="text-center pt-4 text-[13px] break-words max-w-full">{manga.title}</h1>
                    <p className="text-center text-gray-500 text-[13px]">{manga.published.prop.from.year || 'N/A'}</p>

                
                </div>
                

                
        ))}
  

  
  </div>
  </div>
  )
}


export default BrowseManga