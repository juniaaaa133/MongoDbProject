const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const middleware = require('./middlewares/middleware')
const admin = require('./routes/admin')
const item = require('./routes/item')
const doc = require('./routes/documentation')
const itemController = require('./controllers/itemController')
const app = express();

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended :false}))

app.use(middleware);
app.get('/',itemController.viewItems)
app.use('/admin',admin);
app.use(item)
app.use('/developer',doc)


app.listen(8080,()=>{
    console.log('Server running')
});