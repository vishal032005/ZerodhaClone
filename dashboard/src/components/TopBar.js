import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points" style={{ color: "#4caf50", fontWeight: 600 }}>
            24,180.80
          </p>
          <p className="percent" style={{ color: "#4caf50", fontSize: "0.75rem" }}>
            +65.20 (+0.27%)
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points" style={{ color: "#4caf50", fontWeight: 600 }}>
            79,486.32
          </p>
          <p className="percent" style={{ color: "#4caf50", fontSize: "0.75rem" }}>
            +198.40 (+0.25%)
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;