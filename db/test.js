const db = require('./index');

const examples = [
    {type: 'put', key: 'intro', value: 'A'},
    {type: 'put', key: 'hardcoded#1', value: 'B'},
    {type: 'put', key: 'fabric#1', value: 'C'},
    {type: 'put', key: 'container#1', value: 'D'}
];

db.fill('examples', examples);
db.output('examples');
db.clear('examples');
setTimeout (() => { db.output('examples'); }, 100);