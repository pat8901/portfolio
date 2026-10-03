var express = require('express');
var router = express.Router();

const resume = require('../data/resume.example.json');

router.get('/', function(req, res, next){
  res.json(resume);
});

module.exports = router;