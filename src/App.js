import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Projects from "./components/Projects"
import Blog from './components/Blog'
import Contact from './components/Contact'
import Page from './components/Page'
import Detail from './components/Detail'


function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Page} />
                    <Route path="/detail" exact component={Detail} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;