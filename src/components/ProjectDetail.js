import React from 'react'
import ReactMarkdown from 'react-markdown'



const ProjectDetail = props => {
    const project = props.item[0]
    console.log(project)

    return <div className="border-2 mt-10 flex flex-col shadow-sm hover:shadow-xl w-full md:w-4/5 mx-auto bg-white ">
        <div className="w-full bg-green-500 ">
            <img src={project.image} alt="img" className="w-full h-full" />
        </div>
        <div className="w-3/5 mx-auto  mt-10 p-10 ">
            <h1 className="text-3xl font-bold mb-5 text-center">{project.title}</h1>
            <div className="mt-10 text-2xl mb-10 mkd ">
                <div className="string prose">
                    <ReactMarkdown children={project.desc} />
                </div>

            </div>
            <p className="text-3xl">Stack</p>
            <div className="flex ">
                <li>Django</li>
                <li>Django</li>

            </div>
        </div>


    </div>

};

export default ProjectDetail;