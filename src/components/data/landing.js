
const content = () => {
    return (
        <div id="home" className=" mt-10 max-w-full h-screen">
            <div className="bg-hero-landing bg-auto bg-center w-full h-4/5" >
                <div className="w-full h-full bg-black bg-opacity-75 flex items-center ">
                    <div className="md:w-3/5 w-full mx-auto text-white text-3xl animate-bounce-once">
                        <h1 className=" md:text-5xl text-3xl text-center  ">Hi, I'm <span className="font-bold">Haruna Njie</span>. </h1>
                        <br />
                        <div className="text-center font-bold leading-relaxed">
                            <p >I am a full-stack software developer.</p>
                            <p> I build web applications using Django and React.</p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="w-3/5 mx-auto my-10">
                <p className="font-bold text-3xl mt-10 mb-5 capitalize">Tech Stack I use to build web apps</p>
                <ul className="text-xl list-disc ml-10">
                    <li>Python</li>
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>Postgres    </li>
                    <li>Docker</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>HTML/ CSS</li>
                    <li>Git/ Github</li>
                </ul>
            </div>

            <span className="text-xs">Background Photo by <a target="_blank" rel="noreferrer" href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joshua Reddekopp</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

        </div>
    );
};

export default content;