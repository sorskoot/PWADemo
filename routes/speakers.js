'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');

router.get('/', function (req, res) {
    let speakers = scheduleData.map(e => e.speaker);
    res.render('speakers', { message: 'respond with a resource', speakers: speakers });
});

module.exports = router;
