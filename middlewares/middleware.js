const express = require('express')
const User = require('../modals/user')

const app = express();

app.use((req,res,next) => {
    console.log('Home Middleware')
    next();
})

app.use('/admin/create-item',(req,res,next) => {
    console.log('Item middleware')
    next();
})

app.use((req,res,next) => {
    User.findByPk(1)
    .then((user) => {
        console.log(user.id)
        req.user = user.id;
        next();
    })
    .catch((err) => res.render('error'))

})

module.exports = app