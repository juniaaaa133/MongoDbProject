const Movie = require("../models/movies");

exports.createMovie = (req,res) => {
    let {name,description,poster,backdrop,rating,genre} = req.body;
    let movie = new Movie(name,description,backdrop,poster,rating,genre);
     movie
    .create()
    .then(() => {
        console.log("Created Successfully!")
        res.redirect('/');
    })
    .catch(err => console.log(err))
}

exports.updateMovie = (req,res) => {
    let {name,description,poster,backdrop,rating,genre,_id} = req.body;
    let movie = new Movie(name,description,backdrop,poster,rating,genre,_id);
    movie
    .update()
    .then(()=>{
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.deleteMovie = (req,res) => {
    let id = req.params.id;
          Movie
          .delete(id)
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
}