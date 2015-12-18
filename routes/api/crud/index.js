'use strict';

var express = require('express');
var Test = require('../../../models/testmodel');
var crud = express.Router();

// GET all the tests
crud.get('/tests', function(req, res, next){
  Test.find(function(err, tests){
    if (err)
      res.send(err);
    res.json(tests);
  });
});

// POST new test
crud.post('/test', function(req, res, next){
  var test = new Test();
  test.name = req.body.name;

  //save test in database
  test.save(function(err){
    if (err)
      res.send(err)
    res.json({message: 'new entry added'});
  });

});


module.exports = crud;
