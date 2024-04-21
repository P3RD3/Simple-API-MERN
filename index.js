const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')

mongoose.connect("mongodb+srv://admin:admin@backenddb.9fvx27g.mongodb.net/")
.then(() => {
    console.log("Connected to Mongo-db")
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());

app.get('/ping', (req, res) => {
        res.status(200).send({ message:'Ping!'});
});

app.post('/alive', (req, res) => {
   res.status(200).send({alive:'yes'});
});

app.post('/create', async (req, res) => {
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);
    }
    catch (erorr){
        res.status(500).json({message: error.message});
    };
 });