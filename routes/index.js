'use strict';

var express = require('express');
var router = express.Router();
var api = require('./api');

/* API routes*/

router.use('/api', api);

/* Default Route */
router.get('/', function(req, res, next){
  res.render('index', { title: 'Simple Rest API' });
});

module.exports = router;
