import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='container home-pricing mb-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5 p-5'>
                    <h2 className='mb-3' style={{ fontWeight: 500 }}>Unbeatable pricing</h2>
                    <p className='text-muted mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to='/pricing' className='text-decoration-none' style={{ color: "#387ed1", fontWeight: 500 }}>
                        See pricing &rarr;
                    </Link>
                </div>

                <div className='col-lg-7 mt-4'>
                    <div className='row me-5'>
                        <div className='col-4 text-center'>
                            <img src='media/images/pricingEquity.svg' alt="Pricing" className='home-pr-Img mb-2' />
                            <p className='text-muted' style={{ fontSize: "13px" }}>Free account opening</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src='media/images/pricingEquity.svg' alt="Pricing Equity" className='home-pr-Img mb-2' />
                            <p className='text-muted' style={{ fontSize: "13px" }}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src='media/images/intradayTrades.svg' alt="Intraday Trades" className='home-pr-Img mb-2' />
                            <p className='text-muted' style={{ fontSize: "13px" }}>Intraday and F&amp;O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;