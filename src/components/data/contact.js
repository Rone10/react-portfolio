import blog from '../../images/text.png'
import email from '../../images/email.png'
import twitter from '../../images/twitter.png'
import github from '../../images/github.png'

const content = () => {
    return (
        <div id="contact" className="pt-10 w-3/5 mx-auto">
            <p className="capitalize font-bold text-4xl text-center">get in touch with me</p>
            <div className="mt-10  text-2xl mx-auto w-3/4">
                <p className=" font-bold text-2xl">I am open to new opportunities. You can reach out to me on these platfroms:</p>
                <div className="capitalize">

                    <div className="mt-5">
                        <a href="https://harone.me" className="flex">
                            <img src={email} className="w-6 h-6 mr-2" />Email
                        </a>
                    </div>
                    <div className="mt-5">
                        <a href="https://harone.me" className="flex text-twitter-blue">
                            <img src={twitter} className="w-6 h-6 mr-2 " />Twitter
                        </a>
                    </div>
                    <div className="mt-5">
                        <a href="https://harone.me" className="flex">
                            <img src={github} className="w-6 h-6 mr-2" />Github
                        </a>
                    </div>
                    <div className="mt-5">
                        <a href="https://harone.me" className="flex ">
                            <img src={blog} className="w-6 h-6 mr-2 " />My blog
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default content;