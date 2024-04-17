const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const allowedTokens = ['allowedtoken1','allowedtoken2'];
const sequelize = require('./database')
const ShoppingCart = require('./ShoppingCart')

sequelize.sync().then(() => console.log('db is ready'))

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`))


const checkAccessToken = (req, res, next) => {
    const accessToken = req.headers['accesstoken'];
    if (!accessToken) {
        return res.status(401).json({ error: 'Access token is missing' });
    } else if (!allowedTokens.includes(accessToken)){
        return res.status(401).json({ error: 'Invalid Access token!' });
    }
    next();
}
app.use(express.json())
app.use(checkAccessToken)

app.get('/ping', checkAccessToken, (req, res) => {
        res.status(200).send({ message:'Ping!'})
        console.log(req.headers)
        console.log(req.header['accesstoken'])
})

app.post('/alive',checkAccessToken,(req, res) => {
   res.status(200).send({
        alive:'yes',
        your_token: req.headers['accesstoken']
    })
})

app.post('/addItem',(req,res)=> {
    ShoppingCart.create(req.body).then(()=>res.status(200).send({message:'Item added!'}))
})