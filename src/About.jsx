

function About(){
    return(
    <div className="flex flex-col justify-center items-center text-2xl mt-20">
        <div className="text-center w-[1000px] max-w-full p-10">
            <h1 className="text-8xl mb-20">👨‍💻 About me</h1>
            <p className="text-2xl">Hey there! I'm a Junior web developer
                with a passion for anime, code, and creativity.
                I built this AnimeList site as a personal project to merge my love for Anime 
                with my goal of becoming a skilled front-end developer  — and to sharpen my front-end development skills along the way.</p>
        </div>
        
        <ul className="text-center w-[1000px] max-w-full p-10 text-2xl">
            <span className="text-4xl">I'm currently learning and working with:</span>
            
            <li className="font-bold mt-5">HTML, CSS, JavaScript</li>
            <li className="font-bold">Bootstrap & Tailwind CSS for responsive design</li>
            <li className="font-bold">React (basics) for interactive UI</li>
            <li className="font-bold">Python (basics)</li>
        </ul>

        <p className="text-center w-[1000px] max-w-full p-10">When I’m not coding, you’ll probably find me playing a game of chess or making music. I play electric and acoustic guitar,
             as well as piano, and I love the creativity that both coding and music bring into my life.</p>
        <p className="text-center w-[1000px] max-w-full p-10">This site represents both my progress as a developer and my appreciation for anime culture. I’m always learning, always building, and always improving — thanks for checking it out!</p>
    </div>
    )
}
export default About