const Sequelize = require('sequelize')
const database = require('../util/database')

let User = database.define('user',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement :true,
        primaryKey : true,
        allowNull : false,
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    email : {
        type: Sequelize.STRING,
        allowNull : false,
    }
})

module.exports = User;