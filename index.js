 const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/user.model.js");
const { error } = require("console");
const productRoute = require("./routes/user.route.js");

mongoose
  .connect("mongodb+srv://admin:hqA1yslCMQzkAHDs@sitedb.rcgg5n9.mongodb.net/")
  .then(() => {
    console.log("Connected to Mongo-db");
  });

app.listen( 8080, () => console.log(`It's alive on http://localhost:8080`));

app.use(express.json());
app.use("/api", productRoute);
