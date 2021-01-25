import React from 'react'
import projects from './data/projects'
import ProjectDetail from './ProjectDetail'


const ShowProject = props => {
    const project = projects.filter(proj => {
        return proj.id == props.match.params.id;

    });
    console.log(project)
    return <div className="w-full bg-gray-300">
        <ProjectDetail item={project} />
    </div>
};

export default ShowProject;