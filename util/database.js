const mongoDb = require('mongodb')
const dotenv = require('dotenv').config();
let mongoClient = mongoDb.MongoClient;
let db;

exports.connectDb = () => {
    mongoClient
.connect(process.env.MONGO_DB)
.then((res) => {
    db = res.db();
    console.log('Connected to database!')
})
.catch((err) => console.log(err) );
}

exports.getDB = () => {
    if(db){
        return db;
    }
    throw "No Database Is Set Up!"
}

