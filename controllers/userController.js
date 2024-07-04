const User = require("../models/user")

exports.fetchAllUsers = (req,res) => {
    User
    .find()
    .select('username email')
    .populate('movies','name description genre rating poster')
    .then((data) => {
        return res.json(data)
    })
    .catch((err) => console.log(err))
}