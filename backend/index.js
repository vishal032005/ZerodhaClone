const path = require("path");
const dns = require("dns");

// Set reliable DNS servers for resolving MongoDB Atlas SRV records on Windows
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  console.warn("Could not set custom DNS servers, using system default:", e.message);
}

// Load environment variables from backend/.env explicitly
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default holdings seed data
const initialHoldings = [
  { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
  { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
  { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
  { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
  { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
  { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
  { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
  { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
  { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
  { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
  { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
  { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
  { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
];



// Default positions seed data
const initialPositions = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
];

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Zerodha Clone Backend API is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

// Seed endpoint for holdings
app.get("/addHoldings", async (req, res) => {
  try {
    const count = await HoldingsModel.countDocuments();
    if (count > 0) {
      return res.status(200).json({ message: "Holdings already present in database", count });
    }
    await HoldingsModel.insertMany(initialHoldings);
    res.status(201).json({ message: "Holdings added successfully!", count: initialHoldings.length });
  } catch (err) {
    console.error("Error adding holdings:", err.message);
    res.status(500).json({ error: "Failed to add holdings", details: err.message });
  }
});

// Seed endpoint for positions
app.get("/addPositions", async (req, res) => {
  try {
    const count = await PositionsModel.countDocuments();
    if (count > 0) {
      return res.status(200).json({ message: "Positions already present in database", count });
    }
    await PositionsModel.insertMany(initialPositions);
    res.status(201).json({ message: "Positions added successfully!", count: initialPositions.length });
  } catch (err) {
    console.error("Error adding positions:", err.message);
    res.status(500).json({ error: "Failed to add positions", details: err.message });
  }
});

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err.message);
    res.status(500).json({ error: "Failed to fetch holdings", details: err.message });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err.message);
    res.status(500).json({ error: "Failed to fetch positions", details: err.message });
  }
});

// Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ _id: -1 });
    res.status(200).json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).json({ error: "Failed to fetch orders", details: err.message });
  }
});

// Create new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || qty === undefined || price === undefined) {
      return res.status(400).json({
        error: "Missing required fields",
        required: ["name", "qty", "price"],
      });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode: mode || "BUY",
    });

    const savedOrder = await newOrder.save();
    console.log("New order placed:", savedOrder);

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: savedOrder,
    });
  } catch (err) {
    console.error("Error placing order:", err.message);
    res.status(500).json({ error: "Failed to place order", details: err.message });
  }
});

// Auto seed function if collections are empty
async function autoSeed() {
  try {
    const holdingsCount = await HoldingsModel.countDocuments();
    if (holdingsCount === 0) {
      await HoldingsModel.insertMany(initialHoldings);
      console.log("Auto-seeded initial holdings into MongoDB.");
    }

    const positionsCount = await PositionsModel.countDocuments();
    if (positionsCount === 0) {
      await PositionsModel.insertMany(initialPositions);
      console.log("Auto-seeded initial positions into MongoDB.");
    }
  } catch (err) {
    console.warn("Auto-seed error:", err.message);
  }
}

// Connect to Database and Start Server
async function startServer() {
  if (!uri) {
    console.error("MONGO_URL environment variable is missing in .env file!");
    process.exit(1);
  }

  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Connected to MongoDB successfully!");

    // Auto-seed initial holdings and positions if database is empty
    await autoSeed();

    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err.message);
    // Still start server so API reports error status instead of crashing completely
    app.listen(PORT, () => {
      console.log(`Backend server running with DB connection issues on http://localhost:${PORT}`);
    });
  }
}

startServer();