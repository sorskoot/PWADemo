'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');

router.get('/:data', function (req, res) {
    let speakers = scheduleData.map(e => e.speaker);
    res.json(speakers);
});

module.exports = router;
