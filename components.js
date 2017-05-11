var { isDebug } = require('./env');

if (isDebug) {
    module.exports = require('./src/components');
} else {
    module.exports = require('./dist/components');
}
