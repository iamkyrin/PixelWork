
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Producers(){




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
        
   <div className="2xl:flex flex-row items-center justify-center mt-10">
    
    <div className="xl:p-12 p-20">

    <div className="flex flex-row">
        <div className = "xl:ml-0 md:ml-50">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='30'><path fill="currentColor" d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm10 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z"/></svg>
        </div>
       
        <span className="font-bold xl:text-3xl md:text-2xl text-xl ml-2">{studio.titles?.[0].title}</span>  
    </div>

        <div className="border border-gray-300 rounded-[15px] mt-5 max-w-full xl:w-[600px] w-[500px] xl:ml-0 md:ml-15">
            <img src = {studio.images.jpg.image_url} alt = {studio.titles?.[0].title}></img>
        </div>
    </div>
    

    
        <div className="xl:mt-20 border border-gray-200 xl:ml-0 2xl:w-[400px] xl:w-[1000px] max-w-full p-5 xl:h-[750px] h-screen rounded-[15px]">
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
export default Producers