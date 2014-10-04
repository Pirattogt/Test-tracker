var express = require('express');
var router = express.Router();
var Account = require("../models/account.js");
var db = require('../models/tracker');

router.get('/', /*ensureAuthenticated, */function (req, res) {
	db.positions.find({}).sort({userId: 1, timestamp: 1}, function (err, positions) {
		if (err || !positions)
			console.log("No positions found");
		else {
			res.render('positions', {title: 'Positions', positions: positions});
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
