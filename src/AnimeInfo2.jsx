import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


function AnimeInfo2({anime}){

const [activeTab, setActiveTab] = useState("tab1");
const {id} = useParams();
const [news, setNews] = useState([]);
const [episodes, setEpisodes] = useState([]);
const [characters, setCharacters] = useState([]);
const [relations, setRelations] = useState([])

    async function getNews(){
    try{

        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/news`)
        if(!response.ok){
            throw new Error("Could not fetch")
        }
        const data = await response.json()


        setNews(data.data)
    }catch(error){
        console.error(error)
    }



}

    async function getEpisodes(){
        try{

        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
        if(!response.ok){
            throw new Error("Could not fetch")
        }
        const data = await response.json()


        setEpisodes(data.data)
    }catch(error){
        console.error(error)
    }
    }


        async function getCharacters(){
        try{

        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
        if(!response.ok){
            throw new Error("Could not fetch")
        }
        const data = await response.json()


        setCharacters(data.data)
    }catch(error){
        console.error(error)
    }
    }

    async function getRelations(){
            try{

            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/relations`)
            if(!response.ok){
                throw new Error("Could not fetch")
            }
            const data = await response.json()


            setRelations(data.data)
        }catch(error){
            console.error(error)
        }
        }





    useEffect(() => {
        getNews(), getEpisodes(), getCharacters(), getRelations()
    }, [id])

    if(!news) return (
        <div className="flex justify-center items-center h-screen">
           <LoadingTwotoneLoop className = "w-64 h-64 text-blue-500"/>
        </div>
    );
    if(!episodes) return (
        <div className="flex justify-center items-center h-screen">
           <LoadingTwotoneLoop className = "w-64 h-64 text-blue-500"/>
        </div>
    );
    if(!characters) return (
        <div className="flex justify-center items-center h-screen">
           <LoadingTwotoneLoop className = "w-64 h-64 text-blue-500"/>
        </div>
    );
    if(!relations) return (
        <div className="flex justify-center items-center h-screen">
           <LoadingTwotoneLoop className = "w-64 h-64 text-blue-500"/>
        </div>
    );

const tabs = [
        {id: "tab1", label: "Overview"},
        {id: "tab2", label: "Episodes"},
        {id: "tab3", label: "Characters"},
        {id: "tab4", label: "Related"},
    ]
    

    const tabContent = {
        tab1: (
            <div className='mt-10'>
                <svg className = "float-left mr-2 xl:mt-3" width = "25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 " stroke="none" fillRule="evenodd" fill="#000000"></path></g></svg>
                <h2 className='xl:text-[30px] font-bold'>Background</h2>
                <p className='xl:text-lg text-gray-500'>{anime.background}</p>

                <div className='mt-10'>
                        <svg className = "float-left mr-2 xl:mt-3" width = "25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                        <h2 className='xl:text-[30px] font-bold'>Where to watch</h2>
                    <div className='flex xl:gap-15 gap-5'>
                        <div className='mt-10'>
                            <svg className= "float-left mr-2 xl:mt-3" width = "25" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 45" id="Layer_45"> <path d="M29.33,15.06l-26-9A1,1,0,0,0,2.09,7.41L5.91,16,2.09,24.59a1,1,0,0,0,.17,1.09A1,1,0,0,0,3,26a1,1,0,0,0,.33-.06l26-9a1,1,0,0,0,0-1.88ZM4.85,23.3l3.06-6.89a1,1,0,0,0,0-.82L4.85,8.7,25.94,16Z"></path> </g> </g></svg>
                            <a className = "xl:text-[30px]" target = "_blank" href = "https://www.crunchyroll.com/">Crunchyroll</a>
                        </div>
                        <div className='mt-10'>
                            <svg className= "float-left mr-2 xl:mt-3" width = "25" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 45" id="Layer_45"> <path d="M29.33,15.06l-26-9A1,1,0,0,0,2.09,7.41L5.91,16,2.09,24.59a1,1,0,0,0,.17,1.09A1,1,0,0,0,3,26a1,1,0,0,0,.33-.06l26-9a1,1,0,0,0,0-1.88ZM4.85,23.3l3.06-6.89a1,1,0,0,0,0-.82L4.85,8.7,25.94,16Z"></path> </g> </g></svg>
                            <a className = "xl:text-[30px]" target = "_blank" href = "https://www.netflix.com/">Netflix</a>
                        </div>
                        <div className='mt-10'>
                            <svg className= "float-left mr-2 xl:mt-3" width = "25" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 45" id="Layer_45"> <path d="M29.33,15.06l-26-9A1,1,0,0,0,2.09,7.41L5.91,16,2.09,24.59a1,1,0,0,0,.17,1.09A1,1,0,0,0,3,26a1,1,0,0,0,.33-.06l26-9a1,1,0,0,0,0-1.88ZM4.85,23.3l3.06-6.89a1,1,0,0,0,0-.82L4.85,8.7,25.94,16Z"></path> </g> </g></svg>
                            <a className = "xl:text-[30px]" target = "_blank" href = {`https://aniwatchtv.to/search?keyword=${anime.title}`}>Aniwatch</a>
                        </div>
                    </div>
                </div>




                <div className= "2xl:w-[100rem] w-[20rem] md:w-[40rem] xl:w-[80rem] mt-10">
                    <div className= 'mb-5'>
                        <svg className = "float-left mr-2 xl:mt-3" width = "24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 " stroke="none" fillRule="evenodd" fill="#000000"></path></g></svg>
                        <h1 className='xl:text-[30px]'>News</h1>
                    </div>
                    <div className='flex flex-col gap-5 cursor-pointer'>
                        {news.map((news) => (
                            <a target = "_blank" href = {`https://myanimelist.net/news/search?cat=news&q=${anime.title}/`}>
                        <div className='border border-gray-200 p-5 rounded hover:bg-gray-100' key={news.mal_id}>
                            <div className='flex flex-col p-2'>
                             <span className='font-bold text-lg mb-2'>{news.title}</span>
                             <span className='text-gray-500 mb-2'>{new Date(news.date).toLocaleDateString('en-US', {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                             })}
                             <p className='text-gray-500 text-right'>By {news.author_username}</p>
                             </span>
                             <span className='text-[20px] text-gray-500'>{news.excerpt}</span>
                             </div>
                        </div>
                        </a>
                        ))}

                    </div>
                </div>
            </div>


        ),
        tab2: (
            <div className='mt-10'>
                <svg className = "float-left xl:mt-3 mr-3" width = "24"viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.32H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18.32H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.32001H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='xl:text-[30px] font-bold mb-5'>Episodes</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-[110rem]'>
                    {episodes.map(episodes => (
                        <div className='border rounded border-gray-300 cursor-pointer hover:shadow-lg'>
                            <div className='flex flex-col gap-2 p-5'>
                                <span className='xl:text-xl border border-gray-200 rounded-full w-[70px] text-center'>EP {episodes.mal_id}</span>
                                <span className='font-bold xl:text-xl'>{episodes.title}</span>
                                <span className='xl:text-lg text-gray-500'>{new Date(episodes.aired).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                })}</span>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        ),
        tab3: (
            <div className='mt-10'>
                <svg className = "float-left mt-3 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24'><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c.02.01.03.03.04.04c1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5"/></svg>
                <h2 className='font-bold text-[30px] mb-5'>Characters & Voice Actors</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[110rem]'>
                    {characters.map((characters) => (
                        <div className='border rounded border-gray-300 cursor-pointer hover:shadow-lg'>
                            <div className=''>
                                <img className = "xl:float-left xl:w-[400px] w-full max-w-full rounded"src = {characters.character.images.jpg.image_url} alt = {characters.character.name}></img>
                               
                                    <h1 className='font-bold xl:text-3xl text-center'>{characters.character.name}</h1>
                                    <span className='xl:text-3xl text-gray-500 flex justify-center'>{characters.role}</span>
                                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        tab4: (
            <div className='mt-10'>
                <svg className = "float-left xl:mt-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='24'><path fill="currentColor" d="M15.25 0h-6c-.412 0-.989.239-1.28.53L.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0L15.47 8.03c.292-.292.53-.868.53-1.28v-6a.753.753 0 0 0-.75-.75M11.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6"/></svg>
                <h2 className='xl:text-[30px] font-bold mb-5'>Related Anime</h2>
                <div>
                    {relations.map((relations) => (
                        <div>
                            <h1 className='xl:text-2xl mb-5 font-medium'>{relations.relation}</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-5 mb-10 gap-2'>
                                {relations.entry.map((entry) => (
                                    <div className='border border-gray-300 hover:border-blue-500 hover:shadow-lg cursor-pointer rounded-[15px] w-full max-w-[400px] p-3'>
                                        <h2 className='font-medium'>{entry.name}</h2>
                                        <h2 className='capitalize text-gray-400'>{entry.type}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )


}


return(
    <div>
        <div className = "xl:ml-10 xl:mt-0 mt-10" role = "tablist">
            {tabs.map((tab) => (
                
                <button
                key = {tab.id}
                className={`max-w-full xl:px-4 xl:py-5 xl:py-8 md:py-8 py-5 font-semibold ${
                            activeTab === tab.id ? "2xl:w-[450px] md:w-[130px] w-[80px] xl:w-[150px] max-w-full text-xs xl:text-xl md:text-xl bg-blue-500 text-white" : "text-xs xl:text-xl md:text-xl 2xl:w-[450px] md:w-[130px] w-[80px] xl:w-[150px] bg-gray-100 text-black"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                        >{tab.label}</button>
                    ))}
                </div>

                <div className='xl:ml-5'>{tabContent[activeTab]}</div>
    </div>
)

}
export default AnimeInfo2