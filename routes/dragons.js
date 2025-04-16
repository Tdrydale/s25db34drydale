var express = require('express');
const dragon_controller = require('../controllers/dragon');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('dragons', { title: 'Search Results Dragons' });
});
*/

router.get('/', dragon_controller.dragon_view_all_Page );
router.get('/detail', dragon_controller.dragon_view_one_Page);
router.get('/create', dragon_controller.dragon_create_Page);

module.exports = router;
