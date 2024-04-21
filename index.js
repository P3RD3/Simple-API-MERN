const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const mongoose = require('mongoose')
module.exports = app 

mongoose.connect("mongodb+srv://admin:admin@backenddb.9fvx27g.mongodb.net/")
.then(() => {
    console.log("Connected to Mongo-db")
})

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`))

app.use(express.json())

app.get('/ping', (req, res) => {
        res.status(200).send({ message:'Ping!'})
})

app.post('/alive',(req, res) => {
   res.status(200).send({alive:'yes'})
})