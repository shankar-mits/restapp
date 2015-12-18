'use strict';

var express = require('express');
var stripe = require('./stripe');
var crud = require('./crud');
var api = express.Router();

api.get('/', function(req, res) {
  res.render('index', { title: 'API' });
});

api.use('/stripe', stripe);
api.use('/crud', crud);


module.exports = api;
