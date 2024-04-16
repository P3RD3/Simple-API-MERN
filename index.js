const express = require('express');
const app = express(); // add express module
const PORT = 8080;
const allowedTokens = ['allowedtoken1','allowedtoken2'];
const { Sequelize, DataTypes } = require('sequelize');

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'example_database.db'
})

const ShoppingCart = sequelize.define('ShoppingCart', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  })

  let itemList = []


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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return ShoppingCart.findAll();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

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

app.post('/addItem', async (req, res) => {
    try {
      const { name } = req.body;
  
      // Check if the item already exists in the list
      const existingItem = itemList.find(item => item.name === name);
  
      if (existingItem) {
        existingItem.count += 1;
      } else {
        itemList.push({ name, count: 1 });
        await ShoppingCart.create({ name });
      }
  
      res.status(200).json({ message: 'Item added to shopping cart successfully' });
    } catch (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });