const {Schema,model} = require('mongoose')

let movieSchema = new Schema({
  name : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  poster : {
    type : String,
    required : true,
  },
  backdrop : {
    type: String,
    require : true
  },
  rating : {
    type : String,
    required : true,
  },
  genre : {
    type : String,
    required: true
  },
  user : {
    type : Schema.Types.ObjectId,
    ref : "User"
  }
})

module.exports = model('Movie',movieSchema)
