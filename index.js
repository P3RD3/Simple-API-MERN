const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const sequelize = require('./database')
const ShoppingCart = require('./ShoppingCart');
const { where } = require('sequelize');

const allowedTokens = ['allowedtoken1','allowedtoken2'];

const checkAccessToken = (req, res, next) => {
    const accessToken = req.headers['accesstoken']
    if (!accessToken || !allowedTokens.includes(accessToken)) {
        return res.status(401).json({ error: 'Access token is missing or invalid' })}
next()
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

app.get('/getCart',async (req, res)=>{

    const cart = await ShoppingCart.findAll();
    res.status(200).send(cart)
})

app.get('/getCart/:id', async (req, res) => {

const requestId = req.params.id
const cartItem = await ShoppingCart.findOne({ where: { id: requestId } })
res.status(200).send(cartItem)
})


app.put('/updateItem/:id', async (req, res) => {

    const requestId = req.params.id
    const cartItem = await ShoppingCart.findOne({ where: { id: requestId } })
    cartItem.itemName = req.body.name;
    await cartItem.save()
    res.status(200).send('Item name updated')
    })

    app.delete('/clearCart', async (req, res) => {
        await ShoppingCart.destroy({ where:{}, truncate: true})
        res.status(200).send('Shopping cart cleared')
        })

    app.delete('/clearItem/:id', async (req, res) => {
        const requestId = req.params.id
        await ShoppingCart.destroy({where: { id: requestId} })
        res.status(200).send(' Item cleared')
    })