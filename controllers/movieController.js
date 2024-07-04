const Movie = require("../models/movies");

exports.createMovie = (req,res) => {
    let {name,description,poster,backdrop,rating,genre} = req.body;
    Movie.create({
        name,
        description,
        poster,
        rating,
        genre,
        backdrop,
    })
    .then(() => {
        console.log("Created Successfully!")
        res.redirect('/');
    })
    .catch(err => console.log(err))
}

exports.updateMovie = (req,res) => {
    let {name,description,poster,backdrop,rating,genre,_id} = req.body;
    Movie
    .findById(_id)
    .then((movie) => {
        movie.name = name;
        movie.description = description;
        movie.rating = rating;
        movie.genre = genre;
        movie.poster = poster;
        movie.backdrop = backdrop
        return movie.save();
    })
    .then(()=>{
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.deleteMovie = (req,res) => {
    let id = req.params.id;
          Movie
          .findByIdAndDelete(id)
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
}