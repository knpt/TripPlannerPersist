var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/', function(req, res, next){
  res.render('index')
})

router.get('/options', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.send({
      hotels: dbHotels,
      restaurants: dbRestaurants,
      activities: dbActivities
    });
  })
  .catch(next);
});

// router.get('/api/restaurants', function(req, res, next){
//   Restaurant.findAll()
//   .then(function(allrestos){
//     res.send(allrestos)
//   })

// })

module.exports = router;
