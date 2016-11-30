'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');

router.get('/', function (req, res) {
    res.send('API');
});

router.get('/speakers', function (req, res) {
    let speakers = [];
    for (let i = 0; i < scheduleData.length; i++) {
        for (let j = 0; j < scheduleData[i].speaker.length; j++) {
            let speaker = scheduleData[i].speaker[j].trim();
            if (!~speakers.indexOf(speaker) && speaker.length) {
                speakers.push(speaker);
            }
        }
    }
    res.json(speakers.sort());
});
router.get('/speaker/:name', function (req, res) {
   res.json(scheduleData.filter(d => !!~d.speaker.map(s=>s.toLowerCase()).indexOf(req.params.name) ? d : undefined));
});

router.get('/rooms', function (req, res) {
    let rooms = [];
    for (let i = 0; i < scheduleData.length; i++) {
        let room = scheduleData[i].room.trim();
        if (!~rooms.indexOf(room) && room.length) {
            rooms.push(room);
        }
    }
    res.json(rooms.sort());
});


router.get('/sessions', function (req, res) {
    res.json(scheduleData);
});

module.exports = router;
