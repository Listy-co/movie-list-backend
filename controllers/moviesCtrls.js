const db = require('../models')

const getMovies = (req, res) => {
    db.Movies.find({})
        .then((foundMovies) => {
            if (!foundMovies) {
                res.status(404).json({ message: 'Cannot find Movies' })
            } else {
                res.status(200).json({ data: foundMovies })
            }
        })
}

const createMovies = (req, res) => {
    db.Movies.create(req.body)
        .then((createdMovie) => {
            if (!createdMovie) {
                res.status(400).json({ message: 'Cannot create Movies' })
            } else {
                res.status(201).json({ data: createdMovie, message: 'Movie created' })
            }
        })
}

const updateMovie = (req, res) => {
    db.Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedMovie) => {
            if (!updatedMovie) {
                res.status(400).json({ Message: 'Could not update Movie' })
            } else {
                res.status(200).json({ data: updatedMovie, message: "Movie updated" })
            }
        })
}

const deleteMovie = (req, res) => {
    db.Movies.findByIdAndDelete(req.params.id)
        .then((deletedMovie) => {
            if (!deletedMovie) {
                res.status(400).json({ Message: 'Could not delete Movie' })
            } else {
                res.status(200).json({ data: deletedMovie, message: "Movie deleted" })
            }
        })
}


module.exports = {
    getMovies, 
    createMovies,
    updateMovie, 
    deleteMovie
}
