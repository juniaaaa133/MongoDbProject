const express = require('express')
const app = express();

app.use((req,res,next) => {
    console.log('Home Middleware')
    next();
})

app.use('/admin/create-item',(req,res,next) => {
    console.log('Item middleware')
    next();
})

module.exports = app