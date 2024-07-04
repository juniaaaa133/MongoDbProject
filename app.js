const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const movie = require('./routes/movie');
const app = express();

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended :false}))

app.use(movie)

mongoose
.connect(process.env.MONGO_DB)
.then(() => {
    app.listen(8080,()=>{
        console.log('Connected Successfully!')
    })
})
.catch((err) => console.log(err))
