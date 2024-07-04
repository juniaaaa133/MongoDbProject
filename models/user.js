let {Schema,model} = require('mongoose')

let userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type: String,
        minLength : 7,
        required : true
    },
    movies : [{
        type : Schema.Types.ObjectId,
        ref : "Movie"
    }]
})

module.exports = model('User',userSchema);