import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
const Hero = () => {
    return (
        <div className="hero-area bg-color1" id="hero">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 hero-content">
                        <div className="follow-links">
                            <ul>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://github.com/iammostafa76"> <i class="fab fa-github"></i></a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://www.linkedin.com/in/iammostafa/"> <i class="fab fa-linkedin-in"></i></a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://medium.com/@iammostafa76"><i className="fab fa-medium-m"></i> </a></li>
                                <li><a target="_blank" rel="noreferrer norefferrer" href="https://twitter.com/iammostafa76"> <i className="fab fa-twitter"></i></a></li>
                            </ul>
                            <p className="fw-bold text-color2 bg-color2 p-1 px-3">FOLLOW ME</p>
                        </div>
                        <div className="hero-text">
                            <h5>Hello! I am</h5>
                            <h1>Mostafa Mahmud</h1>
                            <h4>Front end Developer</h4>

                            <div className="action pt-4">
                                <a target="_blank"  rel="noreferrer noreferrer" href="https://github.com/iammostafa76/react-portfolio/blob/main/src/Utility/MostafaMahmud-FrontEndDeveloper.pdf">
                                    <button className="me-3 resume button">Get Resume</button>
                                </a>
                                
                                <a href="#about" rel="noreferrer noreferrer">
                                    <button className="button" >About Me</button>
                                </a>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;