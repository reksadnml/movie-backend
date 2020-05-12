const logEvent = require('../events/myEmitter');
const Movie = require('../models/movie.model');
const Category = require('../models/category.model');

class MovieService {
    constructor(movie) {
        this.movie = movie;
    }
    async getAllMovie() {
        let result;
        try {
            // result = await Product.findAll();
            result = await Movie.findAll({include: Category});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getMovieById(id) {
        let result;
        try {
            result = await Movie.findByPk(id, {include: Category});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error (e);
        }
        return result;
    }

    async createMovie(movie) {
        let result;
        try {
            result = await Movie.create(movie);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-PRODUCT-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateMovie(newMovie) {
        const movie = await Movie.findByPk(newMovie.id);
        movie.movieName = newMovie.movieName;
        movie.description = newMovie.description;
        movie.review = newMovie.review;
        movie.imageUrl = newMovie.imageUrl;
        movie.categoryId = newMovie.categoryId;
        let result;
        try {
            result = await movie.save();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-MOVIE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async deleteMovie(movieId) {
        const movie = await Movie.findByPk(movieId);
        let result;
        try {
            result = await movie.destroy();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-MOVIE-FAILED',
                logMessage: e
            });
        }
        return result
    }
}

module.exports = MovieService;