const Movie = require("../models/movies")

exports.renderApiHomePage = (req,res) => {
   Movie
   .getAll()
   .then((movies) => {
    res.render('home',{movies})
   })
   .catch((err) => console.log(err))
    }

exports.renderCreatePage = (req,res) => {
    res.render('create-movie',{title : "Create New Movie"});
}

exports.renderApiDetailPage = (req,res) => {
    const id = req.params.id;
    Movie
    .get(id)
    .then((movie) => {
        res.render('detail',{movie});
    })
    .catch(err => console.log(err))
}

exports.renderApiUpdatePage = (req,res) => {
    const id = req.params.id;
    Movie
    .get(id)
    .then((movie) => {
        res.render('update',{movie})
    })
    .catch(err => console.log(err))
}
