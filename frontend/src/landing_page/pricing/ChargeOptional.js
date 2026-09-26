import React from 'react';

function ChargeOptional() {
    return ( 
        <div className="container mt-5 mb-4 text-muted p-5">
            <div className="row">
                <div className="col-12 table-responsive">
                    <h3 className='mb-4'>Charges for optional value added services</h3>
                    

                    <table
                        className="table border align-middle text-center mb-0 table table-borderless"
                        style={{ fontSize: "0.95rem", borderColor: "#dee2e6" }}
                    >
                        <thead className="table-light text-secondary">
                            <tr>
                                <th className="fw-normal py-3 text-start">Service</th>
                                <th className="fw-normal py-3 text-start">Billing Frequency</th>
                                <th className="py-3 text-start">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                    
                                <td className="py-3 text-start ">Tickertape</td>
                                <td className="py-3 text-start">Monthly / Quarterly / Annual</td>
                                <td className="py-3 text-start">Free: 0 | Pro: 249/699/2399</td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">Smallcase</td>
                                <td className="py-3 text-start">Per transaction</td>
                                <td className="py-3 text-start">Buy & Invest More: 100 | SIP: 10</td>
                               

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">Kite Connect</td>
                                <td className="py-3 text-start">Monthly</td>
                                <td className="py-3 text-start">Connect: 500 | Personal: Free</td>
                                

                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}

export default ChargeOptional;