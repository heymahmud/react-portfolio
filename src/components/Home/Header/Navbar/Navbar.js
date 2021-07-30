import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-color1">
                
                <div className="container pt-2">
                    
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <a className="nav-link mt-2 me-4" href="#about">ABOUT</a>
                            <a className="nav-link mt-2 me-4" href="#skill">SKILL</a>
                            <a className="nav-link mt-2 me-4" href="#portfolio">PORTFOLIO</a>
                            <a className="nav-link mt-2 me-4" href="#contact">CONTACT</a>
                            <a className="nav-link" href="/">
                                <button className="button">Resume</button>
                            </a>
                            
                        
                        </div>
                    </div>
                </div>
                
            
            </nav>
        </div>
    );
};

export default Navbar;