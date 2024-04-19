const { Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, 
    {
        sequelize,
        modelName: 'Users'
    },
)

module.exports = Users;