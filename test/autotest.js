'use strict';

var fs = require('fs');
var enabledTest = process.env.TEST;
var updateExpectations = process.env.hasOwnProperty('UPDATE_EXPECTATIONS');
var path = require('path');
var assert = require('assert');

var enabledTestNames = enabledTest && enabledTest.split(/[\s*,\s*/]/);
var enabledTests = null;

if (enabledTestNames && enabledTestNames.length > 1) {
    enabledTests = {};
    enabledTest = null;
    enabledTestNames.forEach((testName) => {
        enabledTests[testName] = true;
    });
}

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

    actual = isObject ? JSON.parse(actualString) : actualString.replace(/\r?\n$/, '');

    var expected = isObject ? JSON.parse(expectedString) : expectedString.replace(/\r?\n$/, '');

    try {
        assert.deepEqual(actual, expected);
    } catch(e) {
        if (updateExpectations) {
            fs.writeFileSync(expectedPath, actualString, { encoding: 'utf8' });
        } else {
            throw e;
        }
    }
}

function autoTest(name, dir, run, options, done) {
    options = options || {};

    var helpers = {
        compare(actual, prefix, suffix) {
            if (typeof prefix === 'object') {
                var options = prefix;
                prefix = options.prefix;
                suffix = options.suffix;
            } else if (arguments.length === 2) {
                suffix = prefix;
                prefix = null;
            }
            compareHelper(dir, actual, prefix || '', suffix || '');
        }
    };

    run(dir, helpers, done);
}

exports.scanDir = function(autoTestDir, run, options) {
    var testGroup = path.basename(autoTestDir);
    var describeFunc = describe;

    if(enabledTest && testGroup === enabledTest) {
        describeFunc = describe.only;
    }

    describeFunc('autotest', function() {
        if(options && options.timeout) {
            this.timeout(options.timeout);
        }
        fs.readdirSync(autoTestDir)
            .forEach(function(name) {
                if (name.charAt(0) === '.') {
                    return;
                }

                if (name.endsWith('.skip')) {
                    return;
                }

                if (enabledTests && !enabledTests[name] && !enabledTests[testGroup] && !enabledTests[testGroup+'/'+name]) {
                    return;
                }

                var itFunc = it;

                if (enabledTest && (name === enabledTest || testGroup+'/'+name === enabledTest)) {
                    itFunc = it.only;
                }

                var dir = path.join(autoTestDir, name);

                itFunc(`[${name}] `, function(done) {
                    autoTest(name, dir, run, options, done);
                });

            });
    });
};
