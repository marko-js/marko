var fs = require('fs');
var path = require('path');
var testFilter = require('../util/autotest').testFilter;

module.exports = function(lasso, pluginConfig) {
    lasso.dependencies.registerRequireType(
        'tests',
        {
            properties: {
                'path': 'string'
            },

            init: function(lassoContext, callback) {
                if (!this.path) {
                    return callback(new Error('"path" is required for a Marko dependency'));
                }

                this.path = this.resolvePath(this.path);
                callback();
            },

            read: function(lassoContext, callback) {

                var dirname = path.dirname(this.path);
                var tests = [];

                fs.readdirSync(dirname).forEach((testName) => {
                    if (!testFilter.isTestEnabled(testName)) {
                        return;
                    }

                    var testFile = path.join(dirname, testName, 'test.js');

                    if (fs.existsSync(testFile)) {
                        tests.push( `{ name: ${JSON.stringify(testName)}, test: require('./${testName}/test') }`);
                    }
                });

                callback(null, 'module.exports = [\n  ' + tests.join(',\n  ') + ']');
            }
        });
};