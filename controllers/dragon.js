var Dragon = require('../models/dragon');

exports.dragon_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Dragon list');
};

exports.dragon_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Dragon detail: ' + req.params.id);
};

exports.dragon_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Dragon create POST');
};

exports.dragon_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Dragon delete DELETE ' + req.params.id);
};

exports.dragon_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Dragon update PUT' + req.params.id);
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

exports.dragon_view_all_Page = async function(req, res) {
    try{
        theDragons = await Dragon.find();
        res.render('dragons', { title: 'Dragon Search Results', results: theDragons });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.dragon_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dragon();
    document.name = req.body.name;
    document.color = req.body.color;
    document.age = req.body.age;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    
    