import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="container pt-5 pb-5" id="contact">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="title">
                            <h2 className="bg-color2">Contact</h2>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-6 pb-5">
                        <div className="contact">
                            <p>Any company that believes that my skill set could benefit them is welcome to hire me. Please let me know if you are looking for someone like me. I would appreciate a simple "hello" from you.</p>
                            <a href="mailto:iammostafa76@gmail.com">
                                <button className="button resume mt-3">Contact Me</button>
                            </a>
                            
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-details">
                            <div className="email pb-2">
                                <h2>Email</h2>
                                <p>iammostafa76@gmail.com </p>
                            </div>
                            <div className="skype pb-2">
                                <h2>Skype</h2>
                                <p>live:iammostafa76</p>
                            </div>
                            <div className="address">
                                <h2>Address</h2>
                                <p>Ramu - 4700, Cox's Bazar, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;