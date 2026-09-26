import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center p-5">
                    <img 
                        src="/media/images/largestBroker.svg" 
                        alt="Largest Broker" 
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6 p-5">
                    <h1 className="fs-2 mb-3">Largest stock broker in India</h1>
                    <p className="mb-4 text-muted">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row mb-4">
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Futures and Options</li>
                                <li className="mb-2">Commodity derivatives</li>
                                <li className="mb-2">Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Stocks &amp; IPOs</li>
                                <li className="mb-2">Direct mutual funds</li>
                                <li className="mb-2">Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img 
                        src="/media/images/pressLogos.png" 
                        alt="Press Logos" 
                        className="img-fluid" 
                        style={{ width: "90%" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;