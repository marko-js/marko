require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/node-require');
} else {
    module.exports = require('./dist/node-require');
}
