import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Landing from './components/Landing'
import Projects from "./components/Projects"
import Blog from './components/Blog'
import Contact from './components/Contact'
import ShowProject from './components/ShowProject'
import ScrollToTop from './components/ScrollToTop'


function App() {
    return (
        <div className="min-h-screen relative">

            <BrowserRouter>
                <div>
                    <ScrollToTop />
                    <Navbar />
                    <Route path="/" exact component={Landing} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:id" exact component={ShowProject} /> {/* id is the props returned */}
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/contact" exact component={Contact} />
                </div>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>
    );
}

export default App;