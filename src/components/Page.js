import React from 'react'

import Footer from './Footer'
import Landing from './Landing'
import Projects from "./Projects"
import Blog from "./Blog"
import Contact from './Contact'


const Page = () => {
    return <div>
        <Landing />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
    </div>
};

export default Page;