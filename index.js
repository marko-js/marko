var isDebug = require('./env').isDebug;

if (isDebug) {
    module.exports = require('./src/');
} else {
    module.exports = require('./dist/');
}
