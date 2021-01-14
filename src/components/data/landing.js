import { Link } from 'react-router-dom'


const content = () => {
    return (
        <div id="home" className="text-whites mt-10 w-screen h-screen">
            <div className="bg-hero-landing bg-auto bg-center w-full h-full" >
                <div className="w-full h-full bg-black bg-opacity-50 "><h1 className="text-white text-5xl  text-center ">Haruna Njie</h1></div>
            </div>
            <span>Photo by <a href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joshua Reddekopp</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

        </div>
    );
};

export default content;