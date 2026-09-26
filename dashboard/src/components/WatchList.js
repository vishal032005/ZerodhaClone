import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist as initialWatchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = initialWatchlist.map((subArray) => subArray.name);

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [showChart, setShowChart] = useState(false);

  const filteredList = initialWatchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: initialWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(46, 204, 113, 0.6)",
          "rgba(230, 126, 34, 0.6)",
          "rgba(52, 152, 219, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container" style={{ display: "flex", flexDirection: "column", height: "90vh" }}>
      {/* Search Input Bar */}
      <div className="search-container" style={{ padding: "12px 16px", borderBottom: "1px solid #eaeaea", background: "#fff" }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut, gold mcx"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "80%",
            padding: "8px 12px",
            border: "1px solid #e2e8f0",
            borderRadius: "4px",
            fontSize: "13px",
            outline: "none",
          }}
        />
        <span className="counts" style={{ fontSize: "12px", color: "#9b9b9b", fontWeight: 500 }}>
          {filteredList.length} / 50
        </span>
      </div>

      {/* Stocks List */}
      <ul className="list" style={{ flex: 1, overflowY: "auto", margin: 0, padding: 0, listStyle: "none" }}>
        {filteredList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} onToggleChart={() => setShowChart(!showChart)} />;
        })}
        {filteredList.length === 0 && (
          <li style={{ padding: "24px", textAlign: "center", color: "#999", fontSize: "13px" }}>
            No stocks found matching "{searchTerm}"
          </li>
        )}
      </ul>

      {/* Optional Doughnut Chart dropdown */}
      {showChart && (
        <div style={{ padding: "16px", borderTop: "1px solid #f0f0f0", background: "#fafafa" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>Portfolio Overview</span>
            <button
              onClick={() => setShowChart(false)}
              style={{ border: "none", background: "none", cursor: "pointer", color: "#999", fontSize: "12px" }}
            >
              ✕ Close
            </button>
          </div>
          <DoughnutChart data={data} />
        </div>
      )}

      {/* Zerodha Kite Pagination Tabs (1 - 7) */}
      <div
        style={{
          borderTop: "1px solid #e0e0e0",
          background: "#fff",
          display: "flex",
          justifyContent: "space-around",
          padding: "8px 4px",
          userSelect: "none",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((tabNum) => (
          <span
            key={tabNum}
            onClick={() => setActiveTab(tabNum)}
            style={{
              padding: "4px 8px",
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "3px",
              fontWeight: activeTab === tabNum ? "600" : "400",
              color: activeTab === tabNum ? "#f57c00" : "#666",
              borderBottom: activeTab === tabNum ? "2px solid #f57c00" : "2px solid transparent",
            }}
          >
            {tabNum}
          </span>
        ))}
        <span
          onClick={() => setShowChart(!showChart)}
          title="Toggle Chart"
          style={{ cursor: "pointer", padding: "4px 8px", fontSize: "12px", color: showChart ? "#387ed1" : "#888" }}
        >
          📊
        </span>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onToggleChart }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
      style={{
        borderBottom: "1px solid #f2f2f2",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        position: "relative",
        background: showWatchlistActions ? "#fcfcfc" : "transparent",
      }}
    >
      <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: 500,
            color: stock.isDown ? "#eb5757" : "#4caf50",
          }}
        >
          {stock.name}
        </p>

        {showWatchlistActions ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="price" style={{ fontSize: "13px", fontWeight: 500, color: stock.isDown ? "#eb5757" : "#4caf50" }}>
              {Number(stock.price).toFixed(2)}
            </span>
            <WatchListActions uid={stock.name} onToggleChart={onToggleChart} />
          </div>
        ) : (
          <div className="itemInfo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="percent" style={{ fontSize: "12px", color: "#888" }}>
              {stock.percent}
            </span>
            {stock.isDown ? (
              <KeyboardArrowDown style={{ fontSize: "16px", color: "#eb5757" }} />
            ) : (
              <KeyboardArrowUp style={{ fontSize: "16px", color: "#4caf50" }} />
            )}
            <span className="price" style={{ fontSize: "13px", fontWeight: 500, color: stock.isDown ? "#eb5757" : "#4caf50" }}>
              {Number(stock.price).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

const WatchListActions = ({ uid, onToggleChart }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    openBuyWindow(uid);
  };

  return (
    <span
      className="actions"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyClick}
          style={{
            background: "#4184f3",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "4px 8px",
            fontSize: "11px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          BUY
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyClick}
          style={{
            background: "#f57c00",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "4px 8px",
            fontSize: "11px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          SELL
        </button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleChart) onToggleChart();
          }}
          style={{
            background: "transparent",
            color: "#666",
            border: "none",
            borderRadius: "3px",
            padding: "3px 4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BarChartOutlined style={{ fontSize: "16px" }} />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            background: "transparent",
            color: "#666",
            border: "none",
            borderRadius: "3px",
            padding: "3px 4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MoreHoriz style={{ fontSize: "16px" }} />
        </button>
      </Tooltip>
    </span>
  );
};