const Sequelize = require('sequelize')

const sequelize = new Sequelize('item','root','reinoggamyo',{
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = sequelize;
