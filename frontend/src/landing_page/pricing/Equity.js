import React from 'react';

function Equity() {
  return (
    
    <div className="container mt-5 mb-5 text-muted border">
      
      <div className="row">
        
        <div className="col-12 table-responsive">
          
          <table 
            className="table  align-middle text-center mb-0 table table-borderless" 
            style={{ fontSize: "0.95rem", borderColor: "#dee2e6" }}
          >
            <thead className="table-light text-secondary">
              <tr>
                <th style={{ width: "16%" }}></th>
                <th className="fw-normal py-3 text-start ">Equity delivery</th>
                <th className="fw-normal py-3 text-start">Equity intraday</th>
                <th className="fw-normal py-3 text-start">F&amp;O - Futures</th>
                <th className="fw-normal py-3 text-start">F&amp;O - Options</th>
              </tr>
            </thead> 
            <tbody>
              <tr>
                <td className="text-start py-3 fw-semibold ">Brokerage</td>
                <td className="py-3 text-start">Zero Brokerage</td>
                <td className="py-3 text-start">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-3 text-start">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-3 text-start">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="text-start py-3 fw-semibold ">STT/CTT</td>
                <td className="py-3 text-start">0.1% on buy &amp; sell</td>
                <td className="py-3 text-start">0.025% on the sell side</td>
                <td className="py-3 text-start">0.05% on the sell side</td>
                <td className="py-3 text-start ps-4 ">
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                    <li>• 0.15% of the intrinsic value on options that are bought and exercised</li>
                    <li>• 0.15% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-start py-3 fw-semibold ">Transaction charges</td>
                <td className="py-3 text-start">NSE: 0.00307%<br />BSE: 0.00375%</td>
                <td className="py-3 text-start">NSE: 0.00307%<br />BSE: 0.00375%</td>
                <td className="py-3 text-start">NSE: 0.00183%<br />BSE: 0</td>
                <td className="py-3 text-start">NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
              </tr>
              <tr>
                <td className="text-start py-3 fw-semibold ">GST</td>
                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-3 text-start">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-start py-3 fw-semibold ">SEBI charges</td>
                <td className="py-3 text-start">₹10 / crore</td>
                <td className="py-3 text-start">₹10 / crore</td>
                <td className="py-3 text-start">₹10 / crore</td>
                <td className="py-3 text-start">₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-start py-3 fw-semibold border-0">Stamp charges</td>
                <td className="py-3 border-0 text-start" >0.015% or ₹1500 / crore on buy side</td>
                <td className="py-3 border-0 text-start">0.003% or ₹300 / crore on buy side</td>
                <td className="py-3 border-0 text-start">0.002% or ₹200 / crore on buy side</td>
                <td className="py-3 border-0 text-start">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Equity;