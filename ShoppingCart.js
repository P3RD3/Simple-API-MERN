const { Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class ShoppingCart extends Model {}

ShoppingCart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    itemName: {
        type: DataTypes.STRING
    },
    itemCount: {
        type: DataTypes.INTEGER
    }
}, 
    {
        sequelize,
        modelName: 'shoppingCart'
    },
)

module.exports = ShoppingCart;