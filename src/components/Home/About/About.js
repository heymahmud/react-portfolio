import React from 'react';
import './About.css';
import amirImg from '../../../images/amir.jpg'

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

                        <p>👋 Hello! I’m Mostafa Mahmud, a Shopify Expert & Frontend Developer.
                            <br/>
                            <br/>
                            
                            🚀 Turning Ideas into High-Converting Shopify Stores & Landing Pages
                            <br/>
                            <br/>
                            💡 My journey in web development began in 2020, and since then, I’ve successfully built 10+ Web apps (MERN Stack), 40+ Shopify stores and designed 100+ high-converting landing pages.
                            <br/>
                            <br/>
                            🛠️ What I Do:<br/>
                            🔹 Shopify Development – Full store builds, redesigns & custom theme development<br/>
                            🔹 Landing Page Design – CRO-focused pages using PageFly, Replo, & GemPages<br/>
                            🔹 Frontend Development – Clean, fast & responsive UI with React.js & Next.js<br/>
                            🔹 Conversion Optimization – Designs that maximize sales & user engagement<br/>
                            <br/>
                            <br/>
                            🏆 Tech Stack:<br/>
                            💻 Frontend: HTML, CSS, TailwindCSS, JavaScript, React.js, Next.js<br/>
                            🛒 Shopify: Liquid, PageFly, Replo, GemPages<br/>
                            ⚙️ Customization: Shopify Theme Development, API Integration<br/>
                            <br/>
                            <br/>
                            🔗 Let’s create something incredible—whether it’s a high-performing Shopify store or a custom landing page that converts! 🚀</p>
                        {/* <p>Hello! I am Mostafa Mahmud, a Curious and Dedicated Frontend Developer. My journey began in 2020 when a good friend of mine introduced me to the world of web development. When we started learning HTML, I was immediately blown away by CSS!</p>
                        <p>Initially, I began learning JQuery to improve my web skills, but when I realized that it is built on top of JavaScript, I dropped it and began learning Vanilla JS, and then later I chose ReactJS, which I believe will be most helpful for me in the long term. Additionally, I added NodeJS (backend) to my skillset so I could perform Full-Stack JavaScript development. :)</p>

                        <p>I specialize in HTML/CSS and JavaScript on the front end. However, I'm fairly comfortable with ReactJS, NodeJS, ExpressJS, MongoDB, Firebase, WordPress, and Shopify.</p> */}

                        <div className="action pt-3">
                            <a target="_blank" rel="noreferrer noreferrer" href="https://calendly.com/mostafa-mahmud/book">
                                <button className="button resume me-3">Book Your Call</button>
                            </a>
                            {/* <a target="_blank" rel="noreferrer noreferrer" href="https://github.com/iammostafa76/react-portfolio/blob/main/src/Utility/MostafaMahmud-FrontEndDeveloper.pdf">
                                <button className="button resume me-3">Get Resume</button>
                            </a> */}
                            
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