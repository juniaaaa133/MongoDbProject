const User = require("../models/user")

exports.auth = (req,res,next) => {
User
.find({username : 'Mockup_user'})
.then((user) => {
    req.user = user[0]
    next()
})
.catch((err) => console.log(err))
}