require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/browser-refresh');
} else {
    module.exports = require('./dist/browser-refresh');
}
