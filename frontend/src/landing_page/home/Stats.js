import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div className='container mt-5 py-4'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-sm-12 p-4'>
                    <h2 className='mb-4' style={{ fontWeight: 500 }}>Trust with confidence</h2>
                    
                    <h4 className='mt-4 fs-5' style={{ fontWeight: 500 }}>Customer-first always</h4>
                    <p className='text-muted' style={{ fontSize: "15px" }}>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    
                    <h4 className='mt-4 fs-5' style={{ fontWeight: 500 }}>No spam or gimmicks</h4>
                    <p className='text-muted' style={{ fontSize: "15px" }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h4 className='mt-4 fs-5' style={{ fontWeight: 500 }}>The Zerodha universe</h4>
                    <p className='text-muted' style={{ fontSize: "15px" }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h4 className='mt-4 fs-5' style={{ fontWeight: 500 }}>Do better with money</h4>
                    <p className='text-muted' style={{ fontSize: "15px" }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                
                <div className='col-lg-6 col-sm-12 text-center'>
                    <img src='media/images/ecosystemHome.png' alt="Ecosystem" className='img-fluid mb-4' style={{ maxWidth: "90%" }} />
                    <div className='d-flex justify-content-center gap-4'>
                        <Link to='/products' className='text-decoration-none' style={{ color: "#387ed1", fontWeight: 500 }}>
                            Explore our products &rarr;
                        </Link>
                        <a href='https://zerodhaclone-dashboard-s.netlify.app' target='_blank' rel='noreferrer' className='text-decoration-none' style={{ color: "#387ed1", fontWeight: 500 }}>
                            Try Kite demo &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;