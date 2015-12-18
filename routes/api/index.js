'use strict';

var express = require('express');
var stripe = require('./stripe');
var api = express.Router();

api.get('/', function(req, res) {
  res.render('index', { title: 'API' });
});

api.use('/stripe', stripe);


module.exports = api;
