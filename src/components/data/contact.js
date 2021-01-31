import blog from '../../images/text.png'
import email from '../../images/email.png'
import twitter from '../../images/twitter.png'
import github from '../../images/github.png'

const content = () => {
    return (
        <div id="contact" className="pt-10 md:w-3/5 mx-auto">
            <p className="capitalize font-bold md:text-4xl text-3xl text-center">get in touch with me</p>
            <div className="mt-10  md:text-2xl mx-auto text-xl w-3/4">
                <p className=" font-bold text-2xl">I am open to new opportunities. You can reach out to me on these platfroms:</p>
                <div className="capitalize">

                    <div className="mt-5">
                        <a target="_blank" href="mailto:harunanjie@hotmail.com" className="flex">
                            <img src={email} className="w-6 h-6 mr-2" alt="img" />Email
                        </a>
                    </div>
                    <div className="mt-5">
                        <a target="_blank" href="https://twitter.com/Rone_Njie" className="flex text-twitter-blue">
                            <img src={twitter} className="w-6 h-6 mr-2 " alt="img" />Twitter
                        </a>
                    </div>
                    <div className="mt-5">
                        <a target="_blank" href="https://github.com/Rone10" className="flex">
                            <img src={github} className="w-6 h-6 mr-2" alt="img" />Github
                        </a>
                    </div>
                    <div className="mt-5">
                        <a target="_blank" href="https://harone.me" className="flex ">
                            <img src={blog} className="w-6 h-6 mr-2 " alt="img" />My blog
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default content;