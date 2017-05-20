var isDebug = require('./env').isDebug;

if (isDebug) {
    module.exports = require('./src/components/legacy');
} else {
    module.exports = require('./dist/components/legacy');
}
