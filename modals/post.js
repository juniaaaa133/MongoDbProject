const Sequelize = require('sequelize')
const database = require('../util/database')

let Post = database.define('post',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
    },
    userId : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false,
    },
    image : {
        type : Sequelize.TEXT,
        allowNull : false,
    }
})

module.exports = Post 