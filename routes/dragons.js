var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dragons', { title: 'Search Results Dragons' });
});

module.exports = router;
