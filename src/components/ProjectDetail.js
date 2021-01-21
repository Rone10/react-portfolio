import React from 'react'
import projects from './data/projects'
import { Link } from 'react-router-dom'

const ProjectDetail = props => {
    const project = props.item[0]
    console.log("project from ProjectDetail", project)
    return <div className="border-2 mt-10 flex shadow-sm hover:shadow-xl w-3/5 mx-auto">
        <div className="w-2/5 bg-green-500 h-96"></div>
        <div className="w-3/5 bg-gray-200 pt-10 p-10 h-96">
            <h1 className="text-3xl font-bold mb-5">{project.title}</h1>
            <div className="mt-5">
                <p>{project.desc}</p>
            </div>
            <p className="text-3xl">Stack</p>
            <div className="flex">
                <li>Django</li>
                <li>Django</li>

            </div>
        </div>
        <Link to="google.com">View Project</Link>

    </div>

};

export default ProjectDetail;