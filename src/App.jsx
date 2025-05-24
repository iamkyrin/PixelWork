import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import FrontPageAnime from './FrontPageAnime.jsx';
import Manga from "./Manga.jsx";
import NextPage from './NextPage.jsx';
import AnimeInfo from './AnimeInfo';
import './App.css'
import SearchResult from "./SearchResult.jsx";
import SearchBar from "./SearchBar.jsx";
import About from "./About.jsx";
import BrowseManga from "./BrowseManga.jsx";
import BrowseAnime from "./BrowseAnime.jsx";
import BrowseMovies from "./BrowseMovies.jsx";
import Studio from "./Studio.jsx";
import Producers from "./Producers.jsx";
import Footer from "./Footer.jsx";
import Terms from "./Terms.jsx";
import Privacy from "./Privacy.jsx";
import DMCA from "./DMCA.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <FrontPageAnime/>
            
          </>
        } />
        <Route path = "about" element = {<About/>}/>
        <Route path= "/next" element={<NextPage/>} />
        <Route path= "/anime/:id" element={<AnimeInfo/>} />
        <Route path= "/manga/:id" element={<Manga/>} />
        <Route path = "/anime/search" element = {<SearchBar/>}/>
        <Route path= "/search/:input" element={<SearchResult/>} />
        <Route path = "/manga" element={<BrowseManga/>} />
        <Route path = "/schedule" element={<BrowseAnime/>} />
         <Route path = "/movies" element={<BrowseMovies/>} />
         <Route path = "/studio/:id" element = {<Studio/>} />
         <Route path = "/producers/:id" element = {<Producers/>} />
         <Route path = "/about" element = {<About/>} />
          <Route path = "/termsofservice" element = {<Terms/>} />
           <Route path = "/privacy" element = {<Privacy/>} />
            <Route path = "/dmca" element = {<DMCA/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;