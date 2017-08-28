require('./env');

if (MARKO_DEBUG) {
    module.exports = require('./src/hot-reload');
} else {
    module.exports = require('./dist/hot-reload');
}
