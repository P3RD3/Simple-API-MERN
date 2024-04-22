const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const { error } = require("console");
const productRoute = require("./routes/product.route.js");

mongoose
  .connect("mongodb+srv://admin:admin@backenddb.9fvx27g.mongodb.net/")
  .then(() => {
    console.log("Connected to Mongo-db");
  });

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());
app.use("/api/products", productRoute);
