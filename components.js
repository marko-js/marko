require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/components');
} else {
    module.exports = require('./dist/components');
}
