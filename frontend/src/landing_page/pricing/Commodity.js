import React from 'react';

function Commodity() {
    return (
        <div className="container mt-5 mb-5 text-muted">
            <div className="row">
                <div className="col-12 table-responsive">

                    <table
                        className="table border align-middle text-center mb-0 table table-borderless"
                        style={{ fontSize: "0.95rem", borderColor: "#dee2e6" }}
                    >
                        <thead className="table-light text-secondary">
                            <tr>
                                <th style={{ width: "16%" }}></th>
                                <th className="fw-normal py-3 text-start">Currency futures</th>
                                <th className="fw-normal py-3 text-start">Currency options</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td className="text-start py-3 fw-semibold ">Brokerage</td>
                                <td className="py-3 text-start">0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className="py-3 text-start">₹ 20/executed order</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 fw-semibold ">STT/CTT</td>
                                <td className="py-3 text-start">0.01% on sell side (Non-Agri)</td>
                                <td className="py-3 text-start">0.05% on sell side</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 fw-semibold ">Transaction charges</td>
                                <td className="py-3 text-start">MCX: 0.0021%<br />NSE: 0.0001%</td>
                                <td className="py-3 text-start">MCX: 0.0418%<br />NSE: 0.001%</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 fw-semibold ">GST</td>
                                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 fw-semibold ">SEBI charges</td>
                                <td className="py-3 text-start"><b>Agri</b>: <br /> ₹1 / crore <br /> <b>Non-agri:</b><br />₹10 / crore</td>
                                <td className="py-3 text-start">₹10 / crore</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 fw-semibold border-0">Stamp charges</td>
                                <td className="py-3 border-0 text-start">0.0001% or ₹10 / crore on buy side</td>
                                <td className="py-3 border-0 text-start">0.0001% or ₹10 / crore on buy side</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Commodity;