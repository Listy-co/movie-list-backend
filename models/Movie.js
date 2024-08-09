const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageURL: String,
});

module.exports = mongoose.model('Movie', movieSchema);
