const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const sequelize = require('./database')
const ShoppingCart = require('./ShoppingCart')

const allowedTokens = ['allowedtoken1','allowedtoken2'];

const checkAccessToken = (req, res, next) => {
    const accessToken = req.headers['accesstoken'];
    if (!accessToken) {
        return res.status(401).json({ error: 'Access token is missing' });
    } else if (!allowedTokens.includes(accessToken)){
        return res.status(401).json({ error: 'Invalid Access token!' });
    }
next();
}


sequelize.sync().then(() => console.log('db is ready'))

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`))

app.use(express.json())
app.use(checkAccessToken)

app.get('/ping', (req, res) => {
        res.status(200).send({ message:'Ping!'})
        console.log(req.headers)
        console.log(req.header['accesstoken'])
})

app.post('/alive',(req, res) => {
   res.status(200).send({
        alive:'yes',
        your_token: req.headers['accesstoken']
    })
})

app.post('/addItem',(req,res)=> {
    ShoppingCart.create(req.body).then(()=>res.send({message:'Item added!'}))
})