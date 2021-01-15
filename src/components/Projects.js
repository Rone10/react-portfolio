import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './data/projects'

// const items = {
//     "title": "Ecommerce Projects",
//     "desc": "Description and description"
// }

const Projects = () => {
    return <ProjectCard items={projects} />;
};

export default Projects;