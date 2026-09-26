import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 py-4'>
            <div className='row align-items-center'>
                <div className='col-lg-6 text-center mb-4 mb-lg-0'>
                    <img src='media/images/education.svg' alt="Education" className="img-fluid" style={{ maxWidth: "420px" }} />
                </div>
                <div className='col-lg-6'>
                    <h3 className='mb-4' style={{ fontWeight: 500 }}>Free and open market education</h3>
                    <p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='https://zerodha.com/varsity/' target='_blank' rel='noreferrer' className='d-inline-block mb-4 text-decoration-none' style={{ color: "#387ed1", fontWeight: 500 }}>
                        Varsity &rarr;
                    </a>
                    <p className='mb-3 text-muted'>TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='https://tradingqna.com/' target='_blank' rel='noreferrer' className='d-inline-block mb-4 text-decoration-none' style={{ color: "#387ed1", fontWeight: 500 }}>
                        TradingQ&amp;A &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;