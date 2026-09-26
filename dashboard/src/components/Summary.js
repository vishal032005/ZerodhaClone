import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const holdingsSegments = [
    { name: "RELIANCE", percent: 28, color: "#387ed1" },
    { name: "TCS", percent: 24, color: "#f57c00" },
    { name: "INFY", percent: 18, color: "#9c27b0" },
    { name: "HDFCBANK", percent: 16, color: "#4caf50" },
    { name: "ITC", percent: 8, color: "#e91e63" },
    { name: "Others", percent: 6, color: "#607d8b" },
  ];

  return (
    <div style={{ maxWidth: "1050px", margin: "0 auto", padding: "10px 20px" }}>
      {/* Top Greeting */}
      <div style={{ borderBottom: "1px solid #ebebeb", paddingBottom: "16px", marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 400, color: "#444", margin: 0 }}>
          Hi, Vishal
        </h2>
        <span style={{ fontSize: "13px", color: "#9b9b9b" }}>
          Welcome back to Zerodha Kite Dashboard
        </span>
      </div>

      {/* Two Column Margins Section (Equity & Commodity) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        {/* Equity Card */}
        <div style={{ border: "1px solid #e0e0e0", borderRadius: "4px", padding: "22px", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ fontSize: "1.1rem", color: "#444", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#387ed1", display: "inline-block" }}></span>
              Equity
            </span>
            <Link to="/funds" style={{ color: "#387ed1", textDecoration: "none", fontSize: "13px" }}>
              Add funds &rarr;
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 400, color: "#333" }}>1.42L</span>
            <span style={{ fontSize: "13px", color: "#888" }}>Margin available</span>
          </div>

          <div style={{ borderTop: "1px solid #f2f2f2", paddingTop: "14px", display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Margins used</p>
              <strong style={{ color: "#444" }}>₹ 150.25</strong>
            </div>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Account value</p>
              <strong style={{ color: "#444" }}>₹ 10.45k</strong>
            </div>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Opening balance</p>
              <strong style={{ color: "#444" }}>₹ 1.43L</strong>
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div style={{ border: "1px solid #e0e0e0", borderRadius: "4px", padding: "22px", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ fontSize: "1.1rem", color: "#444", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f57c00", display: "inline-block" }}></span>
              Commodity
            </span>
            <Link to="/funds" style={{ color: "#387ed1", textDecoration: "none", fontSize: "13px" }}>
              Activate &rarr;
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 400, color: "#333" }}>25.35k</span>
            <span style={{ fontSize: "13px", color: "#888" }}>Margin available</span>
          </div>

          <div style={{ borderTop: "1px solid #f2f2f2", paddingTop: "14px", display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Margins used</p>
              <strong style={{ color: "#444" }}>₹ 0.00</strong>
            </div>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Account value</p>
              <strong style={{ color: "#444" }}>₹ 57.20</strong>
            </div>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b" }}>Opening balance</p>
              <strong style={{ color: "#444" }}>₹ 25.35k</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Overview Card */}
      <div style={{ border: "1px solid #e0e0e0", borderRadius: "4px", padding: "24px", background: "#fff", marginBottom: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 500, color: "#444", margin: 0 }}>
            💼 Holdings (13)
          </h3>
          <Link to="/holdings" style={{ color: "#387ed1", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
            View all holdings &rarr;
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px", marginBottom: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "2.4rem", fontWeight: 500, color: "#4caf50" }}>
                +1,553.40
              </span>
              <span style={{ background: "rgba(76, 175, 80, 0.12)", color: "#4caf50", padding: "4px 8px", borderRadius: "4px", fontSize: "13px", fontWeight: 600 }}>
                +5.20%
              </span>
            </div>
            <p style={{ margin: "4px 0 0 0", color: "#9b9b9b", fontSize: "13px" }}>P&L (Total Profit)</p>
          </div>

          <div style={{ display: "flex", gap: "36px" }}>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b", fontSize: "13px" }}>Current value</p>
              <span style={{ fontSize: "1.3rem", fontWeight: 500, color: "#333" }}>₹ 31,428.95</span>
            </div>
            <div>
              <p style={{ margin: "0 0 4px 0", color: "#9b9b9b", fontSize: "13px" }}>Investment</p>
              <span style={{ fontSize: "1.3rem", fontWeight: 500, color: "#333" }}>₹ 29,875.55</span>
            </div>
          </div>
        </div>

        {/* Multi-colored Asset Allocation Progress Bar */}
        <div style={{ width: "100%", height: "12px", borderRadius: "6px", display: "flex", overflow: "hidden", marginBottom: "14px" }}>
          {holdingsSegments.map((seg, idx) => (
            <div
              key={idx}
              title={`${seg.name}: ${seg.percent}%`}
              style={{
                width: `${seg.percent}%`,
                background: seg.color,
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "12px", color: "#666" }}>
          {holdingsSegments.map((seg, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: seg.color, display: "inline-block" }}></span>
              <span>{seg.name} ({seg.percent}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Overview Section with SVG Trend Graph */}
      <div style={{ border: "1px solid #e0e0e0", borderRadius: "4px", padding: "24px", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#444", margin: 0 }}>
            📈 Market overview &amp; NIFTY 50
          </h3>
          <span style={{ fontSize: "12px", color: "#9b9b9b" }}>Live Benchmark</span>
        </div>

        <svg viewBox="0 0 900 180" style={{ width: "100%", height: "160px", overflow: "visible" }}>
          <defs>
            <linearGradient id="niftyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#387ed1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#387ed1" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <line x1="0" y1="30" x2="900" y2="30" stroke="#f0f0f0" strokeDasharray="3 3" />
          <line x1="0" y1="80" x2="900" y2="80" stroke="#f0f0f0" strokeDasharray="3 3" />
          <line x1="0" y1="130" x2="900" y2="130" stroke="#f0f0f0" strokeDasharray="3 3" />

          {/* Area fill */}
          <path
            d="M 0 140 Q 150 90, 300 110 T 600 60 T 900 30 L 900 170 L 0 170 Z"
            fill="url(#niftyGradient)"
          />
          {/* Main trend line */}
          <path
            d="M 0 140 Q 150 90, 300 110 T 600 60 T 900 30"
            fill="none"
            stroke="#387ed1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Pulse marker at latest point */}
          <circle cx="900" cy="30" r="4.5" fill="#387ed1" />
          <circle cx="900" cy="30" r="8" fill="#387ed1" opacity="0.25" />
        </svg>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#9b9b9b", fontSize: "12px", marginTop: "10px" }}>
          <span>9:15 AM</span>
          <span>11:00 AM</span>
          <span>1:00 PM</span>
          <span>2:30 PM</span>
          <span>3:30 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;