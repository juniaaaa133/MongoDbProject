const { getDB } = require("../util/database");
let MongoDb = require('mongodb')

class Movie {
  constructor(name,description,backdrop,poster,rating,genre,_id){
    this.name = name;
    this.description = description;
    this.backdrop = backdrop;
    this.poster = poster;
    this.rating = rating;
    this.genre = genre;
    this._id = _id ? new MongoDb.ObjectId(_id) : null
  }

  create(){
    let DB = getDB();
    return DB
    .collection('movies')
    .insertOne(this)
    .then(() => {
      console.log('Created Successfully!')
    })
    .catch(err => console.log(err))
  }

  static getAll(){
    let DB = getDB();
    return DB
    .collection('movies')
    .find()
    .toArray()
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err))
  }

  static get(id){
    let DB = getDB();
    return DB
    .collection('movies')
    .find({_id : new MongoDb.ObjectId(id)})
    .next()
    .then((res) => {
      return res;
    })
    .catch(err => console.log(err))
  }

  update(){
    let DB = getDB();
    return DB
    .collection('movies')
    .updateOne(
      {_id : this._id},
      {$set :this}
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err))
  }

  static delete(id){
    let DB = getDB();
    return DB
    .collection('movies')
    .deleteOne({_id : new MongoDb.ObjectId(id)})
    .then((res) => {
      return res;
    })
    .catch(err => console.log(err))
  }
}

module.exports = Movie;