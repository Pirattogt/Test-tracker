//var debug = require('debug')('myapp');
var app = require('../app');
var Account = require("../models/account.js");
var db = require('../models/tracker');

var positionsToInsert = 10;

Account.findOne({username: 'qwe'}, function (err, testAccount) {
	if (err) {
		console.log(err);
		return;
	}
	if (!testAccount) {
		console.log('No test account found');
		return;
	}
	for (var i = 0; i < positionsToInsert; i++) {
		var lat = (Math.random() * 100);
		var lon = (Math.random() * 100);
		insertPosition(testAccount, lat, lon);
	}
});

function insertPosition(user, lat, lon) {
	db.positions.save({userId: user._id, lat: lat, lon: lon, timestamp: new Date().getTime(), ancestor: [user._id]}, function (err, saved) {
		if (err || !saved) {
			console.error("Position not saved");
		}
		else
		{
			console.log("Position saved");
		}
	});
}
