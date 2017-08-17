var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;

router.get('/days', function(req, res, next){
  Day.findAll()
  .then(function(days) {
    res.send(days);
  });
});

router.post('/days', function(req, res, next){
  Day.create({})
  .then(function(data){
    res.send(data);
  })
});


router.get('/days/:id', function(req,res, next){});
router.delete('/days/:id', function(req,res, next){});
router.post('/days/:id', function(req,res, next){});

router.post('/days/:id/:attractions', function(req,res, next){});
router.delete('/days/:id/:attractions', function(req,res, next){});



module.exports = router;
