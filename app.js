const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const middleware = require('./middlewares/middleware')
const admin = require('./routes/admin')
const item = require('./routes/item')
const doc = require('./routes/documentation')
const itemController = require('./controllers/itemController')
const sequelize = require('./util/database')
const Item = require('./modals/post')
const User = require('./modals/user')

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

Item.belongsTo(User,{constraints : true , onDelete : "CASCADE"});
User.hasMany(Item);

sequelize
.sync()
.then(()=>{
  return User.findByPk(1)
})
.then((user) => {
    if(!user) {
      return User.create({
            name : "Reinnn",
            email : "rein@gmail.com"
        })
}
      return user
}
)
.then(()=> app.listen(8080))
.catch((err) => console.log(err))