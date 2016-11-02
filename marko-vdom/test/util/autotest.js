var fs = require('fs');
var enabledTest = process.env.TEST;
var path = require('path');
var assert = require('assert');


function compareHelper(dir, actual, prefix, suffix) {
    var actualPath = path.join(dir, prefix + 'actual' + suffix);
    var expectedPath = path.join(dir, prefix + 'expected' + suffix);

    var isObject = typeof actual === 'string' ? false : true;
    var actualString = isObject ? JSON.stringify(actual, null, 4) : actual;
    fs.writeFileSync(actualPath, actualString, { encoding: 'utf8' });

    var expectedString;

    try {
        expectedString = fs.readFileSync(expectedPath, { encoding: 'utf8' });
    } catch(e) {
        expectedString = isObject ? '"TBD"' : 'TBD';
        fs.writeFileSync(expectedPath, expectedString, {encoding: 'utf8'});
    }

    var expected = isObject ? JSON.parse(expectedString) : expectedString;
    assert.deepEqual(actual, expected);
}

function autoTest(name, dir, run, options, done) {
    options = options || {};

    var helpers = {
        compare(actual, prefix, suffix) {
            if (typeof prefix === 'object') {
                var options = prefix;
                suffix = options.suffix;
                prefix = options.prefix;
            } else if (arguments.length === 2) {
                suffix = prefix;
                prefix = null;
            }

            compareHelper(dir, actual, prefix || '', suffix || '');
        },

        readFileSync(relPath) {
            var fullPath = path.resolve(dir, relPath);
            return fs.readFileSync(fullPath, { encoding: 'utf8' });
        }
    };

    run(dir, helpers, done);
}

exports.scanDir = function(autoTestDir, run, options) {
    describe('autotest', function() {
        fs.readdirSync(autoTestDir)
            .forEach(function(name) {
                if (name.charAt(0) === '.') {
                    return;
                }

                var itFunc = it;

                if (enabledTest && name === enabledTest) {
                    itFunc = it.only;
                }

                var dir = path.join(autoTestDir, name);

                itFunc(`[${name}] `, function(done) {
                    autoTest(name, dir, run, options, done);
                });
            });
    });
};