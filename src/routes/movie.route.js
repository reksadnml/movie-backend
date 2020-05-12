const express = require('express');
const router = express.Router();
const MovieService = require('../services/movie.service');
const {addNewMovie, getMovieList, deleteMovie, updateMovie} = require("../controllers/movie.controller");
const tokenValidation = require('../middlewares/token-validation');
const movieService = new MovieService();

// router.use(tokenValidation);
router.get('/', (req, res, next) => getMovieList(req, res, movieService));
router.post('/', (req, res, next) => addNewMovie(req, res, movieService));
router.delete('/:id', (req, res, next) => deleteMovie(req, res, movieService));
router.put('/', (req, res, next) => updateMovie(req, res, movieService));

module.exports = router;