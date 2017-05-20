var isDebug = require('./env').isDebug;

if (isDebug) {
    module.exports = require('./src/hot-reload');
} else {
    module.exports = require('./dist/hot-reload');
}
