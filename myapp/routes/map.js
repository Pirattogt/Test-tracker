var express = require('express');
var router = express.Router();
var Account = require("../models/account.js");
var db = require('../models/tracker');

router.get('/', /*ensureAuthenticated, */function (req, res) {

	db.positions.find({}).sort({userId: 1, timestamp: 1}, function (err, positions) {
		if (err || !positions)
			console.log("No positions found");
		else {
			var defaultLat = 57.0268295;
			var defaultLon = 9.9077601;
			var defaultZoom = 8;
			var defaultMapTypeId = 'ROADMAP';
			var data = {
				id: '1234',
				active: true,
				coords: []
			};
			// Add alt/lon to map
			positions.forEach(function (position) {
				var doBounce = false;
				// Test bounce
				doBounce = parseInt(Math.random() * 10) % 2;
				var pos = {lat: position.lat,
					lon: position.lon,
					timestamp: position.timestamp,
					bounce: doBounce
				};
				data.coords.push(pos);
			});
			res.render('map', {	title: 'Where are my mates', pos: data,
								defaultLat: defaultLat, defaultLon: defaultLon,
								defaultZoom: defaultZoom, defaultMapTypeId: defaultMapTypeId});
		}
	});
});
module.exports = router;