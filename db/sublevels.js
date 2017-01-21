var level = require('level');
var path = require('path');
var sublevel = require('level-sublevel');

var dbPath = process.env.DB_PATH || path.join(__dirname, 'sublevels');
var db = sublevel(level(dbPath, {
    valueEncoding: 'json'
}));

exports.base = db;
exports.logs = db.sublevel('logs');
exports.tasks = db.sublevel('tasks');
exports.examples = db.sublevel('examples');