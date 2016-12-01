'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');

router.get('/', function (req, res) {
   let speakers = [];
    for (let i = 0; i < scheduleData.length; i++) {
        for (let j = 0; j < scheduleData[i].speaker.length; j++) {
            let speaker = scheduleData[i].speaker[j].trim();
            if (!~speakers.indexOf(speaker) && speaker.length) {
                speakers.push(speaker);
            }
        }
    }
    res.render('speakers',{speakers});
});

module.exports = router;
