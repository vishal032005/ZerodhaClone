import React from 'react';

function ChargeAcOp() {
    return (
        <div className="container mt-5 mb-5 text-muted p-5">
            <div className="row">
                <div className="col-12 table-responsive">
                    <h3 className='mb-4'>Charges for account opening</h3>

                    <table
                        className="table border align-middle text-center mb-0  table table-borderless"
                        style={{ fontSize: "0.95rem", borderColor: "#dee2e6" }}
                    >
                        <thead className="table-light text-secondary ">
                            <tr>
                                <th className="fw-normal py-3 text-start ">Type of account</th>
                                <th className="fw-normal py-3 text-start">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                    
                                <td className="py-3 text-start ">Individual account</td>
                                <td className="py-3 text-start">FREE</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">Minor account</td>
                                <td className="py-3 text-start">FREE</td>
                               

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">NRI account</td>
                                <td className="py-3 text-start">₹ 500</td>
                                

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">HUF account</td>
                                <td className="py-3 text-start">FREE (online) / ₹ 500 (offline)</td>
                                

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">SEBI charges</td>
                                <td className="py-3 text-start">₹10 / crore</td>
                                

                            </tr>
                            <tr>
                                <td className="text-start py-3 border-0">Partnership, LLP, and Corporate accounts (offline only)</td>
                                <td className="py-3 border-0 text-start">₹ 500</td>
                                

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ChargeAcOp;