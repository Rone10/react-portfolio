import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
// import { Link } from 'react-scroll'

import "../css/Navbar.css"

const Navbar = () => {
    return <div className="sticky top-0">

        <nav className="nav ">
            <div className="w-4/5 mx-auto">
                <div className=" flex  flex-grow justify-center ">
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>

                    <div className="   ">

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