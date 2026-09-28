var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let response = {message: 'APT API is working!'};
    //res.json(response);
    res.send('apt api is working');
});

router.get('/convert', function(req, res, next) {
    let response = {message: 'Converted APT data successfully!'};
    res.json(response);
});

module.exports = router;