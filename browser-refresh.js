var { isDebug } = require('./env');

if (isDebug) {
    module.exports = require('./src/browser-refresh');
} else {
    module.exports = require('./dist/browser-refresh');
}
