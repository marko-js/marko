var { isDebug } = require('./env');

if (isDebug) {
    module.exports = require('./src/compiler');
} else {
    module.exports = require('./dist/compiler');
}
