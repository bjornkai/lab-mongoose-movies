const express = require('express');
const celebrityRouter  = express.Router();
const Celebrity = require('../models/celebrity-model');

celebrityRouter.get('/new', (req, res, next) => {
  // views/celebrities/new-celebrity.hbs => physical path to the file
  // in res.render() we never have this .... "/"
  res.render('/celebrities/new-celebrity');
})


// CREATE A POST ROUTE TO PICK UPP ALL THE INFO FROM THE FORM TO CREATE A NEW CELEBRITY

celebrityRouter.post('/', (req, res, next) => {
  Celebrity.create(req.body)
  .then(newCelebrity => {
    console.log('New celebrity: ', newCelebrity)
  })
  .catch(err => console.log('Error while creating new celebrity', err));
})

// GET ALL CELEBRITIES FROM DB

celebrityRouter.get('/', (req, res, next) => {
  Celebrity.find()
  .then( allCelebrities => {
    res.render('/celebrities/celebrities', ( allCelebrities ))
  })
  .catch(err => console.log('Error while getting all celebrities', err))
})



module.exports = celebrityRouter;