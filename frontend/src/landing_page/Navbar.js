import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src='media/images/logo.svg' alt='logo' className='logo' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-2" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                        <li className="nav-item ">
                            <a 
                                className="btn px-3 py-1 p-5 ms-3 text-white shadow-sm" 
                                style={{ background: "#387ed1", fontSize: "14px", fontWeight: 500, borderRadius: "3px", width: "180px" }}
                                href="http://localhost:3001" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Kite Dashboard &rarr;
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;