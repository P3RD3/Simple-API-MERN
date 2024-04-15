const express = require('express');
const app = express(); // add express module
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

const extractToken = (req, res, next) => {
    const authHeader = req.headers['accessToken'];
    if (authHeader) {
            req.token = authHeader;
    } else {
        // No Authorization header present
        req.token = null;
    }
    next();
}

app.get('/ping', (req, res) => {

    if(!req.token){
        res.status(400).send({message:'Access Token Missing!'})
    } else {
        res.status(200).send({ message:'Ping!'})
    }

})

app.post('/alive',(req, res) => {
    const providedToken = req.body.providedToken;
    if(!providedToken){
        res.status(418).send({ message: 'Access token required'})
    } else if(providedToken !== 'testToken'){
        res.status(419).send({ message: 'Access denied. Wrong token!'})
    } else {
   res.status(200).send({
        alive:'yes',
        your_token: providedToken
    })}
});