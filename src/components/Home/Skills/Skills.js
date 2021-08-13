import React from 'react';
import './Skill.css';

const Skills = () => {
    return (
        <div>
            <div className="container pt-5 pb-5" id="skill">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="title">
                            <h2 className="bg-color2">My Skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>HTML</h4>
                                <p className="percent">90%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'90%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>CSS</h4>
                                <p className="percent">85%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'85%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>SASS</h4>
                                <p className="percent">90%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'90%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Bootstrap</h4>
                                <p className="percent">90%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'90%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Tailwind CSS</h4>
                                <p className="percent">80%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'80%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Javascript</h4>
                                <p className="percent">75%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'75%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>React JS</h4>
                                <p className="percent">85%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'85%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Material UI</h4>
                                <p className="percent">90%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'90%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Node JS</h4>
                                <p className="percent">75%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'75%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Express JS</h4>
                                <p className="percent">70%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'70%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>MongoDB</h4>
                                <p className="percent">80%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'80%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill bg-color2 rounded">
                            <div className="progress-title text-color2">
                                <h4>Git</h4>
                                <p className="percent">85%</p>
                            </div>
                            <div className="progress">
                                <div style={{width:'85%'}} className="progress-bar bg-warning " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;