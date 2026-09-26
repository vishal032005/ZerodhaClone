import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5 img-fluid' style={{ maxWidth: "800px", margin: "0 auto" }} />
                <h1 className='mt-4' style={{ fontSize: "2.75rem", fontWeight: 500, color: "#424242" }}>Invest in everything</h1>
                <p className='p-2 fs-5 text-secondary'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div className="d-flex justify-content-center">
                    <Link 
                        to="/signup" 
                        className='btn btn-primary px-4 py-2 mt-4 fs-5'
                        style={{ background: "#387ed1", borderColor: "#387ed1", borderRadius: "3px", minWidth: "200px" }}
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;