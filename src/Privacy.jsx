

function Privacy(){
    return(
     <div className="text-2xl mt-20 flex justify-center">
      <div className="text-center w-[600px] p-10">
        <h1 className="text-8xl mb-20">Privacy Policy</h1>
        <p className="text-2xl text-left leading-relaxed space-y-4">
          PixelPawn AnimeList respects your privacy. Here's what you need to know:
          <br /><br />
          <strong>No Tracking:</strong> We do not collect or store personal information from visitors.
          <br /><br />
          <strong>No Cookies:</strong> This site does not use tracking cookies or analytics services.
          <br /><br />
          <strong>Third-Party Services:</strong> We use the Jikan API to fetch anime/manga data. No user data is sent to them or collected through this interaction.
          <br /><br />
          <strong>Email Contact:</strong> If you use a contact form or email us directly, your email address will only be used to respond to your inquiry.
          <br /><br />
          If you have questions or concerns, contact us at your.email@example.com.
        </p>
        <p className="text-xl mt-10 italic">
          Disclaimer: PixelPawn AnimeList uses data provided by the Jikan API (https://jikan.moe), an unofficial MyAnimeList API. This website is not affiliated with, endorsed by, or connected to MyAnimeList.net.
        </p>
      </div>
    </div>
    )
}
export default Privacy