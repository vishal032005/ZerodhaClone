import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { holdings as defaultHoldings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodhaclone-backend.onrender.com/allHoldings")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setAllHoldings(res.data);
        } else {
          setAllHoldings(defaultHoldings);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch holdings from backend, using default:", err.message);
        setAllHoldings(defaultHoldings);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + (Number(stock.avg) || 0) * (Number(stock.qty) || 0),
    0
  );
  const totalCurrentValue = allHoldings.reduce(
    (acc, stock) => acc + (Number(stock.price) || 0) * (Number(stock.qty) || 0),
    0
  );
  const totalPL = totalCurrentValue - totalInvestment;
  const totalPLPercent =
    totalInvestment > 0 ? ((totalPL / totalInvestment) * 100).toFixed(2) : "0.00";
  const isOverallProfit = totalPL >= 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net || "+0.00%"}</td>
                  <td className={dayClass}>{stock.day || "+0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrentValue.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 style={{ color: isOverallProfit ? "#4caf50" : "#eb5757" }}>
            {totalPL >= 0 ? "+" : ""}
            {totalPL.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            ({totalPL >= 0 ? "+" : ""}
            {totalPLPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      {allHoldings.length > 0 && <VerticalGraph data={data} />}
    </>
  );
};

export default Holdings;