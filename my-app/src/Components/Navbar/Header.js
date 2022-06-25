import React from 'react'
import { Link, Routes,Outlet,Route } from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Donate from '../donorpage/Donate';
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <img />
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/home' className="nav-item nav-link">HOME </Link>
                        <Link to='/about' className="nav-item nav-link">
                            ABOUT
                        </Link>
                        <Link to='/contact' className="nav-item nav-link">
                            CONTACT
                        </Link>
                        <Link to='/donate' className="nav-item nav-link">
                            DONATE
                        </Link>
                    </div>
                </div>
                
            </nav>
            <Outlet />
            <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/donate' element={<Donate/>}/>
                </Routes>
        </div>
        
    )
}

export default Header