const express = require('express');
const { renderApiHomePage, renderCreatePage, renderApiDetailPage, renderApiUpdatePage } = require('../controllers/pageController');
const { createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');

let router = express.Router();

router.get('/',renderApiHomePage) //index
router.get('/movies/:id',renderApiDetailPage) //detail
router.get('/create-movie',renderCreatePage) //show create page
router.get('/edit-movie/:id',renderApiUpdatePage) //update page

router.post('/create-movie',createMovie) //create
router.post('/edit-movie/:id',updateMovie) //update
router.post('/movies/:id',deleteMovie) //delete

module.exports = router;