import React from 'react';
import './About.css';
import amirImg from '../../images/amir.png'

const About = () => {
    return (
        <div>
            <div className="container pt-5 pb-5" id="about">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2 className="bg-color2">About Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row about">
                    <div className="col-md-6 about-content mt-5">
                        <p>Hello! I am Amir Mostofaa, a passionate and Dedicated Frontend Developer. My journey began in 2019 when a good friend of mine introduced me to the world of web development. When we started learning HTML, I was immediately blown away by CSS!</p>
                        <p>Initially, I began learning JQuery to improve my web skills, but when I realized that it is built on top of JavaScript, I dropped it and began learning Vanilla JS, and then later I chose ReactJS, which I believe will be most helpful for me in the long term. Additionally, I added NodeJS (backend) to my skillset so I could perform Full-Stack JavaScript development. :)</p>

                        <p>I specialize in HTML/CSS and JavaScript on the front end. However, I'm fairly comfortable with ReactJS, NodeJS, MongoDB, Firebase, WordPress, and Shopify.</p>

                        <div className="action pt-3">
                            <button className="button resume me-3">Get Resume</button>
                            <a href="#skill">
                                <button className="button">My Skills</button>
                            </a>
                            
                        </div>
                    </div>
                    <div className="col-md-6 text-center about-img mt-5">
                        <img class="rounded-3 img-fluid" src={amirImg} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;