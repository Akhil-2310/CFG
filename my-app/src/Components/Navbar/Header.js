import React from 'react'
import { Link, Routes,Outlet,Route } from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Donate from '../donorpage/Donate';
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{"background-color": "#525d87", "margin":"auto"}} >
            <div className="container-fluid" style={{"float":"right"}}>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <Link to='/home' className="nav-item nav-link"> <img src={'images/logo.png'} style={{"height":35, "width":80, "float":"left"}} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" style={{"font-family":"'Quicksand', sans-serif", "font-weight":"bold", "flex":"right"}}>
                    <div className="navbar-nav">
                        <Link to='/home' className="nav-item nav-link">HOME </Link>
                        <Link to='/about' className="nav-item nav-link">
                            ABOUT
                        </Link>
                        <Link to='/signUp' className="nav-item nav-link">
                            ADMIN
                        </Link>
                        <Link to='/donate' className="nav-item nav-link">
                            DONATE
                        </Link>
                    </div>
                </div>
            </div>
            </nav>
            <Outlet />
            <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/signUp' element={<Contact/>}/>
                    <Route path='/donate' element={<Donate/>}/>
                </Routes>
        </div>
        
    //     <div className="background-color"> 
    //     <nav className="navbar navbar-expand-lg navbar-light " style="background-color: #525d87;">
    //         <div className="container-fluid">
    //           {/* <!-- <a className="navbar-brand" href="#">Navbar</a> --> */}
    //           <a className="navbar-brand" href="#">
    //             <img src="logo2.png" alt="" width="80" height="20"/>
    //           </a>
    //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className="collapse navbar-collapse navbar-element" id="navbarSupportedContent">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //               <li className="nav-item">
    //                 <a className="nav-link " aria-current="page" href="#" style="color: white;">About Us</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" href="#" style="color: white;">Admin</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" href="#" style="color: white;">User</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </nav>
    // </div>

    )
}

export default Header