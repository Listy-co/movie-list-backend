const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageURL: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);
