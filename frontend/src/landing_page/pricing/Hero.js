import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5 p-5'>
                <h2>Charges</h2>
                <p className='fs-4 text-muted'>List of all charges and taxes</p>
            </div>

            <div className='row mb-5'>
                <div className='col text-center'>
                    <div className='p-4'>
                        <img src='media/images/pricingEquity.svg'></img>
                    </div>
                    <div className='p-4'>
                        <h2 className='mb-4'>
                            Free equity delivery
                        </h2>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                </div>
                <div className='col text-center'>
                    <div className='p-4'>
                        <img src='media/images/intradayTrades.svg'></img>
                    </div>
                    <div className='p-4'>
                        <h2 className='mb-4'>
                           Intraday and F&O trades
                        </h2>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>

                
                </div>
                <div className='col text-center'>
                    <div className='p-4'>
                        <img src='media/images/pricingEquity.svg'></img>
                    </div>
                    <div className='p-4'>
                        <h2 className='mb-4'>
                            Free direct MF
                        </h2>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                
                </div>
            </div>
        </div>
     );
}

export default Hero;