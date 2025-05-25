

function DMCA(){
    return(
 <div className="text-2xl mt-20 flex justify-center">
      <div className="text-center w-[600px] p-10">
        <h1 className="text-8xl mb-20">DMCA Policy</h1>
        <p className="text-2xl text-left leading-relaxed space-y-4">
          PixelPawn AnimeList respects copyright laws and intellectual property rights.
          <br /><br />
          All anime and manga information and media (e.g., titles, descriptions, images) are retrieved via the Jikan API, which in turn scrapes data from MyAnimeList.net. We do not host any copyrighted anime episodes, manga chapters, or fan-translated content.
          <br /><br />
          If you are a copyright holder and believe that any content on this site infringes on your rights, please send a detailed takedown request to:
          <br /><br />
          📩 <strong>Email:</strong> your.email@example.com
          <br /><br />
          📌 Please include:
          <ul className="list-disc list-inside text-left">
            <li>Your name and contact info</li>
            <li>The copyrighted content in question</li>
            <li>A direct URL to the infringing material</li>
            <li>A good faith statement and your digital signature</li>
          </ul>
          <br />
          We will respond promptly to valid DMCA requests.
        </p>
        <p className="text-xl mt-10 italic">
          Disclaimer: PixelPawn AnimeList uses data provided by the Jikan API (https://jikan.moe), an unofficial MyAnimeList API. This website is not affiliated with, endorsed by, or connected to MyAnimeList.net.
        </p>
      </div>
    </div>
    )
}
export default DMCA