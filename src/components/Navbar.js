import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'

import "../css/Navbar.css"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        return setOpen(true)
    }, [])
    return <div className="sticky top-0">

        <nav className={open ? "navs" : "nav"}>
            <div className=" w-full mx-auto md:w-4/5 md:flex md:justify-center">
                <div className=" flex">
                    <div className="block lg:hidden">
                        <button onClick={() => setOpen(!open)} className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:border-white">
                            {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> */}
                            <div className="top-0 left-0">
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                                <div className="w-5 rounded-sm mb-1 bg-black border-2 border-black"></div>
                            </div>
                        </button>
                    </div>

                    <div onClick={() => setOpen(!open)} className={open ? "visible" : "invisible md:visible"}>

                        <Link to="/" className="link-tag">
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
    </div>

};

export default Navbar;