require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/components/legacy');
} else {
    module.exports = require('./dist/components/legacy');
}
