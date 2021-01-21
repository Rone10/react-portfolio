import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

    return <div id="projects" className=" pt-10 w-4/5 mx-auto">
        <h1 className="text-5xl font-bold text-center ">My Projects</h1>

        {
            props.items.map(item => {

                return <div className="border-2 mt-10 flex shadow-sm hover:shadow-xl">
                    <div className="w-2/5 bg-green-500 h-96"></div>
                    <div className="w-3/5 bg-gray-200 pt-10 p-10 h-96">
                        <h1 className="text-3xl font-bold mb-5">{item.title}</h1>
                        <div className="mt-5">
                            <p>{item.desc}</p>
                        </div>
                        <p className="text-3xl">Stack</p>
                        <div className="flex">
                            <li>Django</li>
                            <li>Django</li>
                            <li>Django</li>
                            <li>Django</li>
                        </div>
                    </div>
                    <Link to={`/projects/${item.id}`}>View Project</Link>
                    {/* <Link to={{ pathname: `projects/:${slug}` }} >View Me </Link>
                    <Link to={{ pathname: `projects/${slug}`, query: { slug } }} >View Project </Link> */}
                </div>
            })
        }
    </div>

};

export default ProjectCard;