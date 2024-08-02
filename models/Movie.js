const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  releaseYear: Number,
  genres: [String]
});

module.exports = mongoose.model('Movie', movieSchema);
