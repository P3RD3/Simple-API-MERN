const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const sequelize = require('./database')
const Users = require('./Users');
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

app.post('/addUser',(req,res)=> {
    Users.create(req.body).then(()=>res.send({message:'User added!'}))
})

app.get('/users',async (req, res)=>{

    const users = await Users.findAll();
    res.status(200).send(users)
})

app.get('/users/:id', async (req, res) => {

const requestId = req.params.id
const user = await Users.findOne({ where: { id: requestId } })
if(user===null){
    res.status(200).send({message: "No user with this ID"})}
else {
    res.status(200).send(user)}
})


app.put('/updateUsername/:id', async (req, res) => {

    const requestId = req.params.id
    const user = await Users.findOne({ where: { id: requestId } })
    user.username = req.body.name;
    await user.save()
    res.status(200).send('User name updated')
    })

app.put('/updatePassword/:id', async (req, res) => {

        const requestId = req.params.id
        const user = await Users.findOne({ where: { id: requestId } })
        user.password = req.body.password;
        await user.save()
        res.status(200).send('User password updated')
    })

    app.delete('/clearUsers', async (req, res) => {
        await Users.destroy({ where:{}, truncate: true})
        res.status(200).send('Users cleared')
        })

    app.delete('/clearUsers/:id', async (req, res) => {
        const requestId = req.params.id
        await Users.destroy({where: { id: requestId} })
        res.status(200).send('User cleared')
    })