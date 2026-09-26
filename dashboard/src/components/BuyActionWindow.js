import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await axios.post("https://zerodhaclone-backend-07q4.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      alert(`Order placed successfully for ${uid}!`);
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
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isSubmitting}
            style={{ cursor: "pointer", border: "none" }}
          >
            {isSubmitting ? "Placing..." : "Buy"}
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