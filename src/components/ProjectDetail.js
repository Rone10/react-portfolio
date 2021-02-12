import React from 'react'
// import ReactMarkdown from 'react-markdown'



const ProjectDetail = props => {
    const project = props.item[0]
    console.log(project)

    return <div className="border-2 mt-2 md:mt-10 flex flex-col shadow-sm hover:shadow-xl w-full md:w-4/5 mx-auto  ">
        <div className="w-full  ">
            <img src={project.image} alt="img" className="w-full h-full" />
        </div>
        <div className="md:w-4/5 mx-auto  mt-10 md:p-10 p-3  ">
            <h1 className="text-3xl font-bold mb-5 text-center">{project.title}</h1>
            <div className="mt-10 text-2xl mb-10 mkd ">
                <div className="string prose">
                    {/* <ReactMarkdown children={project.desc} /> */}
                    {project.desc}

                </div>

            </div>
            <p className="text-3xl">Tech Stack</p>
            <div className="flex flex-col mt-5 text-xl">
                {
                    project.stack.map(stack => {
                        return <p>{stack}</p>
                    })
                }


            </div>
            <div className="flex flex-col mt-5">
                {project.link ? <a target="_blank" href={project.link} className="my-2 text-2xl rounded hover:bg-white hover:text-black bg-black text-white p-3 border-b-4 mt-7 mx-auto ">View Demo</a> : ""}



                <a target="_blank" href={project.github} className="my-2 text-2xl rounded hover:bg-white hover:text-black bg-black text-white p-3 border-b-4 mt-1 mx-auto ">View Code on Github</a>

            </div>
        </div>


    </div>

};

export default ProjectDetail;