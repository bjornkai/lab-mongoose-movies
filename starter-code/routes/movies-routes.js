const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/movie-model');
const Celebrity = require('../models/celebrity-model');

movieRouter.get('/new', (req, res, next) => {
  Celebrity.find()
  .then( celebritiesFromDB => {
    res.render('/movies/new-movie', { celebritiesFromDB });
  })
  .catch(err => console.log('Error while creating a movie: ', err))
})







module.exports = movieRouter;