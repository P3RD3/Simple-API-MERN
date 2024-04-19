const express = require('express')
const login = express();
const PORT = 3000;
const sequelize = require('./database')
const Users = require('./Users');
const { where } = require('sequelize');

login.use(express.json())

login.post('/login', async (req,res) => {

    const providedUsername = req.body.username
    const user = await Users.findOne({where: {username: providedUsername}})
    if(!user){
        res.status(400).send({message:'Username is required'})
    }
    else{
        try{
            const providedPassword = req.body.password
            if(!providedPassword){
                res.status(400).send({message:'Password is required'})
            }else if(providedPassword === user.password)
            {
                res.status(200).send({message: 'Login successful!'})
            }else{
                res.status(401).send({message:'Invalid password'})
            }
        }catch(error){
            res.status(500).send({message:'Network Error'})
        }
    }
})


