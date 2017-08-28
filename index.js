require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/');
} else {
    module.exports = require('./dist/');
}
