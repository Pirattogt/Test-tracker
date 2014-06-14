var express = require('express');
var router = express.Router();
var Account = require("../models/account.js");
var db = require('../models/tracker');

router.post('/', ensureAuthenticated, function(req, res) {
    Account.findOne({username: req.user.username}, function(err, account) {
        db.positions.save({userId: account._id, lat: req.param('lat'), lon: req.param('lon'), timestamp: new Date().getTime(), ancestor: [account._id]}, function(err, saved) {
            if (err || !saved)
                console.log("Position not saved");
            else
                console.log("Position saved");
        });

        res.send('position received. Lat: ' + req.param('lat') + ', lon: ' + req.param('lon'));
    });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
