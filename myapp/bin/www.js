#!/usr/bin/env node
var debug = require('debug')('myapp');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	debug('Pirate Tracker server listening on port ' + server.address().port);
});
