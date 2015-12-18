'use strict';

var express = require('express');
var stripe = express.Router();
var charge = require('./charge');

stripe.get('/', function(req, res) {
  res.render('stripe', { title: 'Stripe Payment' });
});

stripe.post('/charge', charge.makeCharge);

module.exports = stripe;
