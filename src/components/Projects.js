import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './data/projects'

// const items = {
//     "title": "Ecommerce Projects",
//     "desc": "Description and description"
// }

const Projects = () => {
    return <div className="w-full h-full bg-black pb-10">
        <ProjectCard items={projects} />
    </div>
};

export default Projects; 