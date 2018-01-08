var path = require('path');
var fs = require('fs');
var testFilter = require('./test-filter');

require.extensions['.tests'] = function (module, filename) {
    var dirname = path.dirname(filename);
    var testExports = module.exports = [];

    fs.readdirSync(dirname).forEach(testName => {
        if (!testFilter.isTestEnabled(testName)) {
            return;
        }

        var testFile = path.join(dirname, testName, 'test.js');

        if (fs.existsSync(testFile)) {
            testExports.push({
                name: testName,
                test: require(testFile)
            });
        }
    });
};