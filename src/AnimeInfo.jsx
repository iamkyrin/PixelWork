import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import AnimeInfo2 from './AnimeInfo2';
import LoadingTwotoneLoop from './LoadingScreen';
import { Link } from 'react-router-dom';
function AnimeInfo(){

    const {id} = useParams();
    const [anime, setAnime] = useState(null);
    

    async function getApi(){
        try{
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
            
            if(!response.ok){
                throw new Error("Could not fetch")
            }
            const data = await response.json();

            setAnime(data.data)
            
        }catch(error){
            console.error(error)
        }
    }



    useEffect(() => {
        getApi()
    }, [id]);



        
    if (!anime) return (
    <div className="flex justify-center items-center h-screen">
       <LoadingTwotoneLoop className = "w-20 h-20"/>
    </div>
);


    
 
  
        
    return (
        <div className='w-[400px] md:w-full xl:w-full xl:p-20 p-10 overflow-x-hidden'>
            <div className='flex justify-center items-center'>
                

                        <iframe
                src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                title={`${anime.title} Official Trailer`}
                allowFullScreen
                className='md:ml-0 w-full xl:ml-0 xl:w-full md:w-full h-full md:h-full xl:h-screen aspect-video border-white rounded-[20px]'
                         >
                    </iframe>
            </div>

            <div className='xl:p-10 p-2'>
                <h1 className='xl:text-6xl font-bold lg:text-xl'>{anime.title}</h1>
                <h2 className='xl:text-5xl lg:text-xl mt-2 text-gray-500'>{anime.title_english}</h2>
                <h2 className='xl:text-3xl lg:text-xl mt-2 text-gray-500'>{anime.title_japanese}</h2>
            </div>

            

             {/*  contains the description, rating, Published, and status of whene it aired */}


            
            <div className='grid grid-cols-2 xl:grid-cols-4 xl:w-full w-full xl:mt-0 mt-5 xl:ml-7 md:ml-0 gap-3'>
                <div className='flex bg-gray-100 rounded-full flex-row h-10 p-3 w-[150px] xl:w-[250px] md:w-[250px]'>
                    <div className = "float-left">       
                        <svg className = "float-left mr-2 mt-0" width = "15" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#eee472" stroke="#eee472"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#eee472" d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0 c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719 c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704 l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0L31.998,0z"></path> <path fill="#eee472" d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478"></path> </g> </g></svg>
                    </div>
                    
                    <span className='xl:text-sm text-xs'><b>{anime.score || "N/A"} </b>
                        
                        <span className='xl:text-xs text-gray-600'> ({anime.scored_by.toLocaleString('en-US')})</span></span>
                </div>
                
                <div className='flex border border-gray-200 rounded-full flex-row h-10 xl:p-3 md:p-3 p-1  w-[150px] xl:w-[250px] md:w-[250px]'>
                    <span className='xl:text-sm text-xs text-sm xl:ml-0 md:ml-0 ml-3'><b>{anime.rating || "N/A"}</b></span>
                </div>
                

                <div className='h-10 p-3 w-[150px] xl:w-[250px] md:w-[250px] flex border border-green-300 bg-green-300 text-black rounded-full flex-row h-10 p-2 lg:p-3'>
                    <span className='xl:text-sm text-xs text-xl'>{anime.status || "N/A"}</span>
                </div>
                

                <div className='h-10 p-3 w-[150px] xl:w-[250px] md:w-[250px] flex border border-blue-300 bg-blue-300 text-white rounded-full flex-row h-10 p-2 lg:p-3'>
                    <span className='xl:text-sm text-xs text-xl capitalize text-black'>{anime.season || "N/A"} {anime.year} </span>
                </div>
            </div>
            

            <div className='xl:p-9 p-0 xl:mt-0 mt-5'>
                <span className='text-gray-500 text-sm xl:text-lg'>{anime.synopsis}</span>
            </div>





            {/*  small lil bubbles or you could call it a breaking point*/}

            <div className='grid grid-cols-2 xl:grid-cols-3 md:gap-5 gap-3 w-full xl:mt-2 mt-10 xl:ml-10 ml-0'>

                <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'>
                    <div className='float-left'>
                        <svg className = "float-left mt-5 ml-5" width= "25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8C2.44772 8 2 8.44772 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 8.44772 21.5523 8 21 8H3Z" fill="#4296FF"></path> <path d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9C22 9.55228 21.5523 10 21 10H3C2.44772 10 2 9.55228 2 9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2Z" fill="#152C70"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z" fill="#152C70"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#152C70"></path> </g></svg>
                    </div>
                    
                    <div className='flex flex-col justify-center p-2'>
                        <span>Aired</span>
                        <span className='text-gray-500'>{anime.aired.string}</span>
                    </div>

                    
                </div>

                <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'>
                    <div className='float-left'>
                        <svg className = "float-left mt-5 ml-5" width = "25"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#4296FF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white"></path> </g></svg>
                    </div>
                    <div className='flex flex-col justify-center p-2'>
                        <span>Duration</span>
                        <span className='text-gray-500'>{anime.duration}</span>
                    </div>

                </div>

               <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'>
                    <div className='float-left'>
                        <svg className = "float-left mt-5 ml-5" width = "24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#4296FF"></path> </g></svg>
                    </div>
                <div className='flex flex-col justify-center p-2'>
                    <span>Episodes</span>
                    <span className='text-gray-500'>{anime.episodes}</span>
                </div>

                </div>


               <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'>
                <div className='float-left'>
                    <svg className = "float-left mt-5 ml-5" width = "24" fill="#4296FF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path> </g></svg>
                </div>

                <div className='flex flex-col justify-center p-2'> 
                    <span>Members</span>
                    <span className='text-gray-500'>{anime.members.toLocaleString('en-US')}</span>
                </div>

                </div>


               <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'>
                    <div className='float-left'>
                        <svg className = "float-left mt-5 ml-5" width = "24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6563 5.24291C15.4743 5.88358 16 6.8804 16 8C16 9.11964 15.4743 10.1165 14.6562 10.7572C14.7816 11.7886 14.4485 12.8652 13.6568 13.6569C12.8651 14.4486 11.7885 14.7817 10.7571 14.6563C10.1164 15.4743 9.1196 16 8 16C6.88038 16 5.88354 15.4743 5.24288 14.6562C4.21141 14.7817 3.13481 14.4485 2.34312 13.6568C1.55143 12.8652 1.2183 11.7886 1.34372 10.7571C0.525698 10.1164 0 9.1196 0 8C0 6.88038 0.525715 5.88354 1.34376 5.24288C1.21834 4.21141 1.55147 3.13481 2.34316 2.34312C3.13485 1.55143 4.21145 1.2183 5.24291 1.34372C5.88358 0.525698 6.8804 0 8 0C9.11964 0 10.1165 0.525732 10.7572 1.3438C11.7886 1.21838 12.8652 1.55152 13.6569 2.3432C14.4486 3.13488 14.7817 4.21146 14.6563 5.24291ZM12.2071 6.20711L10.7929 4.79289L7 8.58579L5.20711 6.79289L3.79289 8.20711L7 11.4142L12.2071 6.20711Z" fill="#4296FF"></path> </g></svg>
                    </div>

                    <div className='flex flex-col justify-center p-2'> 
                        <span>Rank</span>
                        <span className='text-gray-500'>#{anime.rank}</span>
                    </div>

                </div>


               <div className='border border-gray-200 rounded-[10px] xl:w-[300px] md:w-[250px] w-[150px]'> 
                <div className='float-left'>
                    <svg className = "float-left mt-5 ml-5" width = "24"viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#4296FF"></path> </g></svg>
                </div>

                <div className='flex flex-col justify-center p-2'>
                    <span>Favourites</span>
                    <span className='text-gray-500'>{anime.favorites.toLocaleString('en-US')}</span>
                </div>

                </div>

                
            </div>
            

              
            
            {/* This is the end of the section, you could call this the break of it and the start of the other bubbles 
            
            that include the authors etc.
            */}




        <div className='xl:p-10 p-0 xl:mt-0 mt-10'>
            <h1 className='text-lg'><b>Studios</b></h1>
            <div className='cursor-pointer hover:bg-gray-300 px-4 py-2 flex justify-center border border-gray-200 rounded-full w-[150px] mt-2 mb-10 text-lg'>
                <h2>{anime.studios.map(studios => (
                    <Link to = {`/studio/${studios.mal_id}`}>
                        <h2>{studios.name}</h2>
                    </Link>
                    
                ))}</h2>
            </div>

            <div>
                    <h1 className='text-lg'><b>Producers</b></h1>
                <div className="flex flex-wrap gap-2">
                    {anime.producers.map(producers => (
                        <div className='cursor-pointer hover:bg-gray-300 mt-2 border border-gray-200 rounded-full px-4 py-2 min-w-[150px] text-center'>
                            <Link to = {`/producers/${producers.mal_id}`}>
                                <span>{producers.name}</span>
                            </Link>
                            
                        </div>
                        
                    ))}
                </div>
            </div>

            <div className=''>

                    <svg className='float-left mr-2' width = "25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <h1 className='font-bold mt-10 text-lg'>Genres</h1>
                

                <div className="flex flex-wrap gap-2">
                    {anime.genres.map(genres => (
                        <div className='mt-2 bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white  rounded-full px-4 py-2 min-w-[150px] text-center'>
                            <span>{genres.name}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <svg className='float-left mr-2' width = "25"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
                <h1 className='font-bold mt-10 text-lg'>Themes</h1>
                <div className="flex flex-wrap gap-2">
                    {anime.themes.map(themes => (
                        <div className='mt-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white  rounded-full px-4 py-2 min-w-[150px] text-center'>
                        <span>{themes.name}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <svg 
                className='float-left mr-2' width = "25"
                 fill="#000000" viewBox="0 -1.82 49.704 49.704" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="people_user" data-name="people user" d="M587.32,484.18l1.787-.487c1.348-.36,2.731-.73,3.848-1.087a24.844,24.844,0,0,1-2.228-4.319,6.915,6.915,0,0,1-1.09-1.219,8.12,8.12,0,0,1-1.3-2.884,8.794,8.794,0,0,1-.24-2.022,7.117,7.117,0,0,1,.74-3.253,15.055,15.055,0,0,1,1.752-6.318,6.954,6.954,0,0,0-4.153-1.4c-4.017.005-7.3,3.524-7.384,7.9a3.22,3.22,0,0,0-.463,1.744,4.272,4.272,0,0,0,.122,1.014,4.054,4.054,0,0,0,.645,1.441,3.013,3.013,0,0,0,.719.734,13.56,13.56,0,0,0,2.232,3.926c0,.012,0,.024,0,.035s0,.056-.005.094a4.475,4.475,0,0,1-.871.385c-.8.29-1.9.588-3.074.9l-1.119.3c-1.793.528-3.948,2.265-4.032,7.574,0,.06,0,.122,0,.182l.009.188.039.758.713.26.176.062a32.362,32.362,0,0,0,6.822,1.619A9.649,9.649,0,0,1,587.32,484.18Zm29.253,1.779c-.589-.164-1.169-.32-1.73-.473-1.825-.487-3.548-.95-4.816-1.412a6.874,6.874,0,0,1-1.336-.6c0-.039,0-.078-.005-.106s0-.062,0-.094a21.428,21.428,0,0,0,3.495-6.137,4.855,4.855,0,0,0,1.109-1.135,6.457,6.457,0,0,0,1.018-2.274,6.894,6.894,0,0,0,.185-1.579,5.053,5.053,0,0,0-.724-2.721c-.115-6.817-5.235-12.336-11.547-12.343-6.276.007-11.406,5.506-11.54,12.344a5.048,5.048,0,0,0-.724,2.729,6.731,6.731,0,0,0,.191,1.583,6.364,6.364,0,0,0,1.008,2.25,4.85,4.85,0,0,0,1.122,1.151,21.358,21.358,0,0,0,3.489,6.132.493.493,0,0,1,0,.055c0,.039-.005.088-.008.148a7.039,7.039,0,0,1-1.361.6c-1.245.452-2.971.918-4.8,1.408l-1.75.475c-2.8.826-6.169,3.537-6.3,11.836,0,.091,0,.189,0,.283l.015.293.059,1.185,1.113.4.277.1a61.276,61.276,0,0,0,38.432,0l.289-.106,1.149-.422.019-1.224.007-.334v-.26C622.764,489.5,619.4,486.789,616.573,485.959Z" transform="translate(-573.203 -457.088)"></path> </g></svg>
                <h1 className='font-bold mt-10 text-lg'>Demographics</h1>
                <div className="flex flex-wrap gap-2">
                    {anime.demographics.map(demographics => (
                        <div className='mt-2 bg-purple-500 hover:bg-purple-600 cursor-pointer text-white  rounded-full px-4 py-2 min-w-[150px] text-center'>
                        <span>{demographics.name}</span>
                        </div>
                    ))}
                </div>




            </div>
        </div>

                <div>
                    <AnimeInfo2 anime = {anime}/>
                </div>
                    



        </div>





    );

}

export default AnimeInfo