var express = require('express');
var router = express.Router();
var Account = require("../models/account.js");
var db = require('../models/tracker');

router.get('/', /*ensureAuthenticated, */function(req, res) {
    db.positions.find({}, function(err, positions) {
        if (err || !positions)
            console.log("No positions found");
        else {
            res.writeHead(200);
            positions.forEach(function(position) {
                res.write('UserId: ' + position.userId + '\n');
                res.write('Timestamp: ' + position.timestamp + '(' + new Date(position.timestamp) + ')\n');
                res.write('Latitude: ' + position.lat + '\n');
                res.write('Lontitude: ' + position.lon + '\n');
            })
            res.end("\n");
        }
    });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
