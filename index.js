require('dotenv').config(); 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/user.model.js");
const { error } = require("console");
const productRoute = require("./routes/user.route.js");

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@sitedb.rcgg5n9.mongodb.net`;


mongoose
  .connect(`${MONGODB_URL}`)
  .then(() => {
    console.log("Connected to Mongo-db");
  });

app.listen(process.env.PORT, () => console.log(`It's alive on http://localhost:${process.env.PORT}`));

app.use(express.json());
app.use("/api/products", productRoute);
