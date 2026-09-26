import React, { useState } from 'react';

function Signup() {
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mobile || mobile.length < 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        alert(`OTP sent to +91 ${mobile}!`);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src="/media/images/signup.png" 
                        alt="Signup" 
                        className="img-fluid"
                        style={{ maxWidth: "420px" }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
                <div className="col-md-5">
                    <h2 className="mb-2" style={{ fontWeight: 600 }}>Signup now</h2>
                    <p className="text-muted mb-4">Or track your existing application.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-light">+91</span>
                            <input 
                                type="tel" 
                                className="form-control" 
                                placeholder="Enter your 10 digit mobile number"
                                maxLength="10"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                                required
                            />
                        </div>
                        <p className="text-muted" style={{ fontSize: "12px" }}>
                            You will receive an OTP on your number for verification.
                        </p>
                        <button type="submit" className="btn btn-primary px-4 py-2 w-100 mb-3" style={{ background: "#387ed1", borderColor: "#387ed1" }}>
                            Continue
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <a href="https://zerodhaclone-dashboard-s.netlify.app" className="text-decoration-none" style={{ color: "#387ed1", fontSize: "14px" }}>
                            Already have an account? Go to Dashboard &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;