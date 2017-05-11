var { isDebug } = require('./env');

if (isDebug) {
    module.exports = require('./src/');
} else {
    module.exports = require('./dist/');
}
