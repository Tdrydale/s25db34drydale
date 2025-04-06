var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var dragon_controller = require('../controllers/dragon');

router.get('/', api_controller.api);

router.post('/dragons', dragon_controller.dragon_create_post);
router.delete('/dragons/:id', dragon_controller.dragon_delete);
router.put('/dragons/:id', dragon_controller.dragon_update_put);
router.get('/dragons/:id', dragon_controller.dragon_detail);
router.get('/dragons', dragon_controller.dragon_list);
module.exports = router;

exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"dragons", ');
    res.write(' "verbs":["GET","PUT","DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};
