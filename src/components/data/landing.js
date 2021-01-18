
const content = () => {
    return (
        <div id="home" className="text-whites mt-10 w-screen h-screen">
            <div className="bg-hero-landing bg-auto bg-center w-full h-full" >
                <div className="w-full h-full bg-black bg-opacity-75 flex items-center ">
                    <div className="w-3/5 mx-auto text-white text-3xl ">
                        <h1 className=" text-5xl  text-center  ">Hi, I'm <span className="font-bold">Haruna Njie</span>. </h1>
                        <br />
                        <div className="text-cente font-bold">
                            <p >I am a software engineer. I love coding in Python and Javascript. <br />
                        In the backend, I use Django and the Django Rest Framework to build server-side logic.<br />
                                <br />
                        In the frontend I use React to build Single-Page-Apps.

                        </p>
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
                    <li>Docker</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>HTML/ CSS</li>
                    <li>Git/ Github</li>
                </ul>
            </div>

            <span className="text-xs">Background Photo by <a target="_blank" href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joshua Reddekopp</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

        </div>
    );
};

export default content;