var isDebug = require('./env').isDebug;

if (isDebug) {
    module.exports = require('./src/express');
} else {
    module.exports = require('./dist/express');
}
