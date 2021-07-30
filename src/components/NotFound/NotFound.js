import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="notFound text-center text-white pt-5">
                            <h1>404</h1>
                            <h2>Page Not Found!</h2>
                            <Link to="/">
                             <button className="button mt-4">Go Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;