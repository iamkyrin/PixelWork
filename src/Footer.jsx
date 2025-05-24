

import { Link } from "react-router-dom"
function Footer(){

    return(


           <footer>
            <div className="flex justify-center p-10 mt-20 border-top">
            <div className="p-12">
                <div className="w-96">
                    <h1 className="font-bold text-3xl mb-5">PixelWork AnimeList</h1>
                    <p className="text-gray-400 text-xl p-2">Discover new anime titles, explore hidden gems from every genre and era, and dive headfirst into your next big obsession—all curated and presented in one convenient, easy-to-use platform</p>
                </div>
            </div>
            <div className="p-10">
               <div>
                    <h1 className="font-bold text-3xl mb-5 p-2">Explore</h1>
                    
                        <a href = "/" className="text-gray-400 text-xl p-2 hover:text-blue-500 cursor-pointer">Anime</a>

                    <Link to = "/manga">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">Manga</p>
                    </Link>
                    <Link to = "/schedule">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">Schedule</p>
                    </Link>
                    <Link to = "/anime/search">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">Search</p>
                    </Link>
                </div>
            </div>
            <div className="p-10"> 
               <div>
                    <h1 className="font-bold text-3xl mb-5 p-2">Community</h1>

                        <a href = "https://github.com/pixelpawn" target = "_blank" className="cursor-pointer text-gray-400 text-xl p-2 hover:text-blue-500">Github</a>
                    <Link to = "/about">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">About Me</p>
                    </Link>

                        <a className="text-gray-400 text-xl p-2 hover:text-blue-500" href="mailto:doublecalibre999@gmail.com">Contact</a>

                </div>
            </div>
            <div className="p-10">
               <div>
                    <h1 className="font-bold text-3xl mb-5 p-2">Legal</h1>
                    <Link to = "/termsofservice">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">Terms of Service</p>
                    </Link>
                    <Link to = "/privacy">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">Privacy Policy</p>
                    </Link>
                    <Link to = "dmca">
                        <p className="text-gray-400 text-xl p-2 hover:text-blue-500">DMCA</p>
                    </Link>
                </div>
            </div>
        </div>
                <div className="flex justify-center flex-row text-lg text-gray-400">
                    <h1>© 2025 PixelWork AnimeList. All rights reserved.</h1>
                </div>
           </footer>

           
                
    )
}
export default Footer