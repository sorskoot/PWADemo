'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');
const pug = require('pug');

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
    // let speakers = scheduleData.filter(d => !!~d.speaker.map(s => s.toLowerCase()).indexOf(req.params.name) ? d : undefined);
    // var c = pug.renderFile('views/test.pug', {speaker:req.params.name, sessions:speakers });
    // res.send(new Buffer(c));

    res.json(scheduleData.filter(d => !!d.speaker.filter(n => n.toLowerCase().match(req.params.name.toLowerCase())).length));
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
    pausecomp(1500);
    res.json(scheduleData);
});

function pausecomp(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) { }
}
module.exports = router;
