const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const movie = require('./routes/movie');
const { connectDb } = require('./util/database');
const app = express();

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended :false}))

app.use(movie)

connectDb();
app.listen(8080,()=>{
    console.log('Connected Successfully!')
})
