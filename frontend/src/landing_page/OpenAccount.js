import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h3 className='mt-5'>Open a Zerodha account</h3>
                <p className='p-2 fs-5 text-secondary'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="d-flex justify-content-center">
                    <Link to="/signup" className='btn btn-primary px-4 py-2 mt-3 fs-5' style={{ background: "#387ed1", borderColor: "#387ed1", minWidth: "200px" }}>
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;