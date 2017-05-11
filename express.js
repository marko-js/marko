var { isDebug } = require('./env');

if (isDebug) {
    module.exports = require('./src/express');
} else {
    module.exports = require('./dist/express');
}
