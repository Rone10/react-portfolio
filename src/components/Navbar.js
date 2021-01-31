import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'

import "../css/Navbar.css"

const Navbar = () => {

    const [open, setOpen] = useState(true);

    useEffect(() => {
        return setOpen(false)
    }, [])
    return <div className="sticky top-0">

        <nav className={open ? "navs" : "nav"}>
            <div className=" w-full mx-auto md:w-4/5 lg:flex lg:justify-center">
                <div className=" flex ">
                    <div className="block lg:hidden absolute top-3 left-0">
                        <button onClick={() => setOpen(!open)} className=" flex items-center px-3 py-2 border rounded  border-teal-500 hover:border-white">

                            <div className="">
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                            </div>
                        </button>
                    </div>

                    {/* <div onClick={() => setOpen(!open)} className={`${open ? "visible" : "invisible lg:visible"}  mx-auto `} > */}
                    <div onClick={() => setOpen(!open)} className={`${open ? "block" : "hidden lg:block"}  mx-auto `} >

                        < Link to="/" className="link-tag">
                            Home
                        </Link>

                        <Link activeClass="active" to="/projects" className="link-tag">
                            Projects
                        </Link>
                        <Link activeClass="active" to="/blog" className="link-tag">
                            Blog
                        </Link>
                        <Link activeClass="active" to="/contact" className="link-tag">
                            Contact
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    </div >

};

export default Navbar;