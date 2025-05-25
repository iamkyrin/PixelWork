
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Studio(){


        const {id} = useParams();
        const [studio, setStudio] = useState(null);

    async function getApi(){
        try{
            const response = await fetch(`https://api.jikan.moe/v4/producers/${id}`);

            if(!response.ok){
                throw new Error("Could not fetch")
            }

            const data = await response.json();


            setStudio(data.data)
        }catch(Error){
            console.log(Error)
        }
    }

    useEffect(() => {
        getApi()
    }, [id]);

      if (!studio) return <div>Loading...</div>
  return (
        
   <div className="flex flex-col items-center justify-center mt-10">
    <div className="flex">
        <div className = "">
             <svg  className = "" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30'><path fill="currentColor" d="M440 464V16H72v448H16v32h480v-32Zm-32 0H272v-64h-32v64H104V48h304Z"/><path fill="currentColor" d="M160 304h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32zm-160-96h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32zm-160-96h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32z"/></svg>
        </div>
       
        <span className="font-bold xl:text-3xl ml-2">Studio</span>  
    </div>

        
    
        <div className="mt-20 border border-gray-200 ml-0 xl:w-full md:w-full w-[400px] p-5">
                <div className="flex justify-center flex-col">
                    <div className="p-5">
                        <h1>Established</h1>
                        <h2>{studio.established.toLocaleString("en, US")}</h2>
                    </div>
                    <div className="p-5">
                        <h1>Total Anime</h1>
                        <h2 className="font-bold">{studio.count}</h2>
                    </div>
                    <div className="p-5">
                        <h1>Favourites</h1>
                        <span className="text-green-600">{studio.favorites.toLocaleString('en-US')}</span>
                    </div>
                    <div className="p-5">
                        <h1>MyAnimeList</h1>
                        <a className = "text-blue-500" target = "_blank"href = {`https://myanimelist.net/anime/producer/${id}/${studio.titles.title}`}>View on MyAnimeList</a>
                    </div>
                    <div className="p-5">
                        <h1>About</h1>
                        <h2 className="text-gray-500">{studio.about}</h2>
                    </div>
                    
                </div>
                
  
        </div>
  </div>
  )
}
export default Studio