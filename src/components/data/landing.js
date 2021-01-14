import { Link } from 'react-router-dom'

const content = () => {
    return (
        <div id="home" className="text-white mt-16 pt-20">
            <div className="landing h-30rem flex flex-grow">
                <div className=" flex-1 mr-0">
                    <h1 className="mr-0">Photo</h1>
                </div>
                <div className="flex flex-col w-3/5 p-20">
                    <h1 className="font-bold text-5xl">Haruna Njie</h1>
                    <h3 className="mt-1 text-3xl">Full-stack Developer</h3>

                </div>
            </div>
            <div className="flex flex-col w-3/5 p-20">
                <Link activeClass="active" to="/projects" className="link-tag text-black">
                    Projects
            </Link>
            </div>

            <div className="bio w-4/5 mx-auto text-black my-14">
                <h1>About Me</h1>
                <p>  am Junior Web developer able to build a Web
                presence from the ground up - from concept,
                navigation, layout and programming to UX and SEO.
                Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.
    </p>
                <p>  am Junior Web developer able to build a Web
                presence from the ground up - from concept,
                navigation, layout and programming to UX and SEO.
                Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.
    </p>
                <p>  am Junior Web developer able to build a Web
                presence from the ground up - from concept,
                navigation, layout and programming to UX and SEO.
                Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.
    </p>
                <p>  am Junior Web developer able to build a Web
                presence from the ground up - from concept,
                navigation, layout and programming to UX and SEO.
                Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.
    </p>
                <p>  am Junior Web developer able to build a Web
                presence from the ground up - from concept,
                navigation, layout and programming to UX and SEO.
                Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.
    </p>
            </div>
        </div>
    );
};

export default content;