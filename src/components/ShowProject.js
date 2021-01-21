import React from 'react'
import projects from './data/projects'
import ProjectDetail from './ProjectDetail'


const ShowProject = props => {
    const project = projects.filter(proj => {
        return proj.id == props.match.params.id;

    });
    // console.log(project)
    return <div>
        <ProjectDetail item={project} />
    </div>
};

export default ShowProject;