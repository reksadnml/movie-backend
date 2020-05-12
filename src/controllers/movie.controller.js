const getMovieList = async (req, res, service) => {
    try {
        let movies;
        if (req.query.id) {
            const id = req.query.id;
            movies = await service.getMovieById(id)
        } else if (req.query.pageNo && req.query.rowPage) {
            movies = await service.getAllMoviePaging(req.query.pageNo, req.query.rowPage);
        } else {
            movies = await service.getAllMovie();
        }
        res.status(200);
        res.json(movies);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewMovie = async (req, res, service) => {
    try {
        const movie = req.body;
        const newMovie = await service.createMovie(movie);
        res.status(200);
        res.json(newMovie);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateMovie = async (req, res, service) => {
    const movie = req.body;
    const updatedMovie = await service.updateMovie(movie);
    res.send(updatedMovie);
};

const deleteMovie = async (req, res, service) => {
    const movieId = req.params.id;
    const deleteMovie = await service.deleteMovie(movieId);
    res.send({id: movieId});
};

module.exports = {
    getMovieList, addNewMovie, updateMovie, deleteMovie
};