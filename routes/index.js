'use strict';
var express = require('express');
var router = express.Router();
var scheduleData = require('../data/schedule');

/* GET home page. */
router.get('/', function (req, res) {
    let sessions = scheduleData;
    res.render('index', { 
        title: 'Express',
        sessions:sessions,
        env: process.env.NODE_ENV, 
        insights:process.env.APP_INSIGHTS 
    });
});

module.exports = router;
