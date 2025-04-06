var express = require('express');
const dragon_controller = require('../controllers/dragon');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('dragons', { title: 'Search Results Dragons' });
});
*/

router.get('/', dragon_controller.dragon_view_all_Page );

module.exports = router;
