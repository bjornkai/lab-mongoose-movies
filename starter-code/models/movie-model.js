const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// CONSTRUCTOR TO CREATE MOVIES

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }]
},
{
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;