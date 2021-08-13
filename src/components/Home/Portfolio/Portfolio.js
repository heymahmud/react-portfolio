import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import projects from '../../../fakeData/PrevProjects'

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState(projects);

    useEffect(() => {
        fetch(projects)
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [portfolios])

    console.log(portfolios)

    return (
        <div>
            <div className="container pt-5 pb-5" id="portfolio">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="title">
                            <h2 className="bg-color2">Portfolio</h2>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="portfolio">
                            {
                                portfolios.map(portfolio => (
                                    <div className="single-port pb-4 mb-4">
                                        <img src={portfolio.img} alt="" className="img-fluid"/>
                                        <div className="portfolio-details p-3">
                                            <h4>{portfolio.name}</h4>
                                            <p className="pt-2">{portfolio.description}</p>

                                            <div className="project-links pb-3">
                                                <a className="me-3" target="_blank" rel="noopener noreferrer" href={portfolio.github}><i className="fab fa-github"></i></a>
                                                <a target="_blank" rel="noopener noreferrer" href={portfolio.live}><i className="fas fa-external-link-alt"></i></a>
                                            </div>
                                            <span className="me-1">{portfolio.tech1}</span>
                                            <span className="me-1">{portfolio.tech2}</span>
                                            <span className="me-1">{portfolio.tech3}</span>
                                            <span>{portfolio.tech4}</span>
                                        </div>
                                    </div>
                                ))
                            }

                            
                        </div>

                        
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="https://github.com/iammostafa76" target="_blank" rel="noreferrer noreferrer">
                            <button className="button">More</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;