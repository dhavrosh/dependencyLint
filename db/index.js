const db = require('./sublevels');

exports.fill = (sublevel, data) => {
    db[sublevel].batch(data);
};

exports.output = sublevel => {
    db[sublevel]
        .createReadStream({ keys: true, values: true })
        .on('data', (record) => {
            console.log(record);
        })
        .once('end', () => {
            console.log(`End of ${sublevel} sublevel`);
        });
};

exports.clear = sublevel => {
    db[sublevel]
        .createKeyStream()
        .on('data', key => {
            db[sublevel].del(key);
        })
        .once('end', () => {
            console.log(`All records of ${sublevel} were deleted`);
        });
};
