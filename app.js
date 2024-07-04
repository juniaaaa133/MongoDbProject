const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const movie = require('./routes/movie');
const User = require('./models/user');
const { auth } = require('./middlewares/auth');
const user = require('./routes/user');
const app = express();

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended :false}))

app.use(auth);
app.use(movie)
app.use(user)

mongoose
.connect(process.env.MONGO_DB)
.then(()=>{
    app.listen(8080,()=>{
        console.log('Connected Successfully!')
    })
   return User
    .findOne()
    .then((user) => {
        if(!user){
            User
            .create({
                username : "Mockup_user",
                email : "example@gmail.com",
                password : "onetwothree"
            })
        }else{
            return user
        }
    })
})
.catch((err) => console.log(err))
