const db = require('../db');
const handleRequest = require('./utils').handleRequest;

module.exports = {
    recordRequest
};

function recordRequest(req) {
    const res = handleRequest(req.method, req.url, req.headers['user-agent']);

    db.fill('logs', [{ type: 'put', key: Date.now().toString(), value: res }]);

    return res;
}