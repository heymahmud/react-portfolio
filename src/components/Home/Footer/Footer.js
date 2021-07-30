import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-txt">
                            <p className="text-center pt-3">© {new Date().getFullYear()} Created with ❤️ by <a target="_blank" rel="noreferrer" href="skype:live:iammostafa76?chat">ME</a></p>

                        </div>
                    </div>
                </div>
                <a className="toTop" href="#hero"><i class="fas fa-chevron-up"></i></a>
            </div>
        </div>
    );
};

export default Footer;