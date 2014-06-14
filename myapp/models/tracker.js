var databaseUrl = "tracker"; // "username:password@example.com/mydb"
var collections = ["positions"]
var db = require("mongojs").connect(databaseUrl, collections);
module.exports = db;