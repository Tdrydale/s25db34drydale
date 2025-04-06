var Dragon = require('../models/dragon');

exports.dragon_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume list');
};

exports.dragon_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

exports.dragon_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};

exports.dragon_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

exports.dragon_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

exports.dragon_list = async function(req, res) {
    try{
        theDragons = await Dragon.find();
        res.send(theDragons);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    