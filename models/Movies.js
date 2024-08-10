const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageURL: String,
});

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies
