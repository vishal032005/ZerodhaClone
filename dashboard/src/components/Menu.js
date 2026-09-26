import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const isSelected = (path) => {
    if (path === "/" && (currentPath === "/" || currentPath === "")) return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getMenuClass = (path) => {
    return isSelected(path) ? "menu selected" : "menu";
  };

  return (
    <div className="menu-container">
      <Link to="/">
        <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={getMenuClass("/")}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={getMenuClass("/orders")}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={getMenuClass("/holdings")}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={getMenuClass("/positions")}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={getMenuClass("/funds")}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={getMenuClass("/apps")}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                background: "#fff",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                padding: "8px 16px",
                zIndex: 1000,
                minWidth: "130px",
              }}
            >
              <p style={{ margin: "4px 0", fontSize: "13px", color: "#333" }}>
                <strong>User Profile</strong>
              </p>
              <p style={{ margin: "4px 0", fontSize: "12px", color: "#666" }}>
                vishal@zerodha
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;