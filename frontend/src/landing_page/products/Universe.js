import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container'>
            <div className='row mt-5 text-center text-muted p4'>
                <h5 className='mt-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
            </div>
            <div className='row mt-5  p-4 text-center'>
                <div className='p-1'>
                    <h3 className='text-muted'>The Zerodha Universe</h3>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>

                </div>

                <div className='row  '>
                    <div className='col-1'></div>
                    <div className='col p-5 text-center'>
                        <div className='row text-center'>
                            <img src='media/images/zerodhaFundhouse.png' style={{ width: 200 }} className=' ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.</p>
                        </div>
                        <div className='row text-center'>
                            <img src='media/images/streaklogo.png' style={{ width: 200 }} className='mt-5 ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.</p>
                        </div>

                    </div>
                    <div className='col p-5 text-center'>
                        <div className='row text-center'>
                            <img src='media/images/sensibullLogo.svg' style={{ width: 200 }} className=' ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.</p>
                        </div>
                        <div className='row text-center'>
                            <img src='media/images/smallcaseLogo.png' style={{ width: 200 }} className='mt-5 ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs</p>
                        </div>

                    </div>
                    <div className='col p-5 text-center'>
                        <div className='row text-center'>
                            <img src='media/images/tijori.svg' style={{ width: 180 }} className=' ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.</p>
                        </div>
                        <div className='row text-center'>
                            <img src='media/images/dittoLogo.png' style={{ width: 180 }} className='mt-5 ms-3 p-1'></img>
                            <p className='mt-3 mb-4'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            </p>
                        </div>

                    </div>
                    <div className='col-1'></div>
                </div>

                <div className='mb-5 text-center'>
                    <Link 
                        to="/signup" 
                        className='btn btn-primary px-4 py-2 fs-5'
                        style={{ background: "#387ed1", borderColor: "#387ed1", borderRadius: "3px", minWidth: "200px" }}
                    >
                        Sign up for free
                    </Link>
                </div>


            </div>
        </div>
    );
}

export default Universe;