require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const path = require("path");
const ensureAuthenticated=require("./utils/isAuthenticated");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174","https://zerodha-clone-frontend-r06o.onrender.com","https://zerodha-clone-dashboard-tqtp.onrender.com"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

app.get("/allHoldings",async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrder = await OrdersModel.find({});
  res.json(allOrder);
});
app.use("/user", authRoute);



app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});

