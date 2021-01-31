import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import "../css/Projects.css"

const ProjectCard = (props) => {

    return <div id="projects" className=" md:pt-10 w-full md:w-4/5 mx-auto  text-white">
        <h1 className="text-5xl font-bold text-center ">My Projects</h1>

        {
            props.items.map(item => {

                return <div key={item.id} className=" overflow-hidden border-b-2 rounded-3xl md:p-10    mt-10 flex flex-col md:flex-row shadow-sm hover:shadow-xl">
                    <div className="w-full mr-5   height">
                        <img src={item.image} alt="img" className="w-full  h-full rounded-3xl" />
                    </div>
                    <div className="w-full p-10 flex flex-col ">
                        <div className="mt-1 mb-10">
                            <h1 className="text-3xl font-bold my-5">{item.title}</h1>
                            <p> {item.summary}</p>
                        </div>
                        <div >
                            <Link className=" border-b-2" to={`/projects/${item.id}`}>View Project</Link>
                        </div>
                    </div>

                    {/* <Link to={{ pathname: `projects/:${slug}` }} >View Me </Link>
                    <Link to={{ pathname: `projects/${slug}`, query: { slug } }} >View Project </Link> */}
                </div>
            })
        }
    </div>

};

export default ProjectCard;