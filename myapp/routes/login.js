var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

router.get('/', function(req, res) {
    res.render('login', {user: req.user});
});

router.post('/', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

module.exports = router;