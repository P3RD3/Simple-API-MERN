const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { error } = require("console");
const productRoute = require("./routes/user.route.js");
const cors = require('cors');

mongoose
  .connect("mongodb+srv://admin:hqA1yslCMQzkAHDs@sitedb.rcgg5n9.mongodb.net/")
  .then(() => {
    console.log("Connected to Mongo-db");
  });

app.listen( 8080, () => console.log(`It's alive on http://localhost:8080`));

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization,accesstoken',
  credentials: true // If you need to handle cookies
}));
app.use("/api", productRoute);