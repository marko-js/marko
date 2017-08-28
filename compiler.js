require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/compiler');
} else {
    module.exports = require('./dist/compiler');
}
