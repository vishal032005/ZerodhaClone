import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY", initialPrice = 0 }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(Number(initialPrice) || 0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const isSell = mode === "SELL";
  const actionColor = isSell ? "#ff5722" : "#4184f3";

  const handleActionClick = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await axios.post("https://zerodhaclone-backend-07q4.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      });
      alert(`${mode} order placed successfully for ${uid}!`);
    } catch (err) {
      console.error("Failed to place order:", err);
      alert("Failed to place order. Make sure backend is running.");
    } finally {
      setIsSubmitting(false);
      closeBuyWindow();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeBuyWindow();
  };

  const marginRequired = (Number(stockQuantity || 0) * Number(stockPrice || 0)).toFixed(2);

  return (
    <div className="container" id="buy-window" draggable="true">
      <div
        className="header"
        style={{
          background: actionColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          color: "#fff",
        }}
      >
        <div>
          <h3 style={{ margin: 0, color: "#fff", fontSize: "1rem", fontWeight: 500 }}>
            {mode} {uid}
          </h3>
          <span style={{ color: "#fff", fontSize: "0.75rem", opacity: 0.9 }}>
            NSE • ₹{Number(stockPrice || 0).toFixed(2)}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCancelClick}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
            padding: "0 6px",
          }}
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>{isSell ? "Order value" : "Margin required"} ₹{marginRequired}</span>
        <div>
          <button
            type="button"
            className={`btn ${isSell ? "btn-orange" : "btn-blue"}`}
            onClick={handleActionClick}
            disabled={isSubmitting}
            style={{
              cursor: "pointer",
              border: "none",
              background: actionColor,
            }}
          >
            {isSubmitting ? "Placing..." : isSell ? "Sell" : "Buy"}
          </button>
          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
            style={{ cursor: "pointer", border: "none" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;