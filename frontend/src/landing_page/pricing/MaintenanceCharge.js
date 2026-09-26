import React from 'react';

function MaintenanceCharge() {
    return ( 
       <div className="container mt-5 text-muted p-5">
            <div className="row">
                <div className="col-12 table-responsive">
                    <h3 className='mb-4'>Demat AMC (Annual Maintenance Charge)</h3>
                    <div className='mb-4'><p>Free for first year*</p></div>
                    <p>From second year onwards, for BSDA accounts:</p>

                    <table
                        className="table border align-middle text-center mb-0 table table-borderless"
                        style={{ fontSize: "0.95rem", borderColor: "#dee2e6" }}
                    >
                        <thead className="table-light text-secondary">
                            <tr>
                                <th className="fw-normal py-3 text-start">Value of holdings</th>
                                <th className="fw-normal py-3 text-start">AMC</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                    
                                <td className="py-3 text-start ">Up to ₹4 lakh</td>
                                <td className="py-3 text-start">FREE</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">₹4 lakh – ₹10 lakh</td>
                                <td className="py-3 text-start">₹100 per year + 18% GST, charged quarterly</td>
                                <td></td>
                               

                            </tr>
                            <tr>
                                <td className="text-start py-3 ">Above ₹10 lakht</td>
                                <td className="py-3 text-start">₹300 per year + 18% GST, charged quarterly</td>
                                <td></td>
                                

                            </tr>
                            
                        </tbody>
                    </table>
                    <p className='mt-2'>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
                    <p>To learn more about BSDA, click here. To learn more about AMC, click here.</p>
                    <p>*Resident individual accounts only.</p>
                </div>
            </div>
        </div>
     );
}

export default MaintenanceCharge;