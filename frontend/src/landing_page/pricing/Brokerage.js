import React from 'react';
import { NavLink } from 'react-router-dom';

function Brokerage() {
  return (
    <div className="container mt-4 mb-4">
        <div className='row'>
            <div className='col-12'>
      <div className="d-flex  border-bottom">
        <ul className="nav nav-tabs border-0 gap-4">
          <li className="nav-item">
            <NavLink
              to="/pricing/equity"
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "500",
                color: isActive ? "#424242" : "#387ed1",
                borderBottom: isActive ? "3px solid #387ed1" : "3px solid transparent",
                paddingBottom: "8px",
                display: "inline-block",
                transition: "all 0.2s ease-in-out"
              })}
            >
              Equity
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/pricing/currency"
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "500",
                color: isActive ? "#424242" : "#387ed1",
                borderBottom: isActive ? "3px solid #387ed1" : "3px solid transparent",
                paddingBottom: "8px",
                display: "inline-block",
                transition: "all 0.2s ease-in-out"
              })}
            >
              Currency
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/pricing/commodity"
              style={({ isActive }) => ({
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "500",
                color: isActive ? "#424242" : "#387ed1",
                borderBottom: isActive ? "3px solid #387ed1" : "3px solid transparent",
                paddingBottom: "8px",
                display: "inline-block",
                transition: "all 0.2s ease-in-out"
              })}
            >
              Commodity
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Brokerage;