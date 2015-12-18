'use strict';
var stripe = require('stripe')('sk_test_J0peFdVQGxxAJS1ZXG9LzWoG');
module.exports = {
  makeCharge: function makeCharge(req, res, next) {
    var stripeToken = req.body.stripeToken;
    var amount = 1000;
    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount,
        description: "Test Charge"
      },
      function(err, charge) {
        if (err) {
          res.send(500, err);
        } else {
          console.log(charge);
          res.send(charge);
        }
      });
  }
}
