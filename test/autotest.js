'use strict';

var fs = require('fs');
var enabledTest = process.env.TEST;
var updateExpectations = process.env.hasOwnProperty('UPDATE_EXPECTATIONS');
var path = require('path');
var assert = require('assert');
const projectRoot = path.join(__dirname, '..');

var enabledTestNames = enabledTest && enabledTest.split(/[\s*,\s*/]/);
var enabledTests = null;

if (enabledTestNames && enabledTestNames.length > 0) {
    enabledTests = {};
    enabledTest = null;
    enabledTestNames.forEach((testName) => {
        enabledTests[testName] = true;
    });
}

function replaceAll(str, substr, replacement) {
    return str.split(substr).join(replacement);
}

function normalize(str) {
    if (typeof str === 'string') {
        return replaceAll(str, projectRoot, 'PROJECT_ROOT');
    }
    return str;
}

function compareHelper(dir, actual, prefix, suffix, format) {
    var actualPath = path.join(dir, prefix + 'actual' + suffix);
    var expectedPath = path.join(dir, prefix + 'expected' + suffix);

    actual = normalize(actual);
    format = format || (contents => contents);

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

    if (typeof actual === 'string') {
        actual = replaceAll(actual, projectRoot, 'PROJECT_ROOT');
    }

    var expected = isObject ? JSON.parse(expectedString) : expectedString.replace(/\r?\n$/, '');
    var formattedActual = format(actual);
    var formattedExpected = format(expected);
    try {
        assert.deepEqual(formattedActual, formattedExpected);
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

    var compareSequenceLookup = {};

    var helpers = {
        compareSequence(actual, prefix, suffix) {
            if (typeof prefix === 'object') {
                var options = prefix;
                prefix = options.prefix;
                suffix = options.suffix;
            } else if (arguments.length === 2) {
                suffix = prefix;
                prefix = null;
            } else if (arguments.length === 1) {
                suffix = '.html';
                prefix = null;
            }

            prefix = prefix || '';
            suffix = suffix || '';

            let sequenceKey = prefix + '|' + suffix;

            let sequence = compareSequenceLookup[sequenceKey];
            if (sequence === undefined) {
                sequence = 1;
                compareSequenceLookup[sequenceKey] = 2;
            } else {
                compareSequenceLookup[sequenceKey]++;
            }

            suffix = '.' + sequence + suffix;

            compareHelper(dir, actual, prefix, suffix);
        },

        compare(actual, prefix, suffix, format) {
            if (typeof prefix === 'object') {
                var options = prefix;
                prefix = options.prefix;
                suffix = options.suffix;
            } else if (arguments.length === 2) {
                suffix = prefix;
                prefix = null;
            } else if (arguments.length === 1) {
                suffix = '.html';
                prefix = null;
            }

            prefix = prefix || '';
            suffix = suffix || '';

            let sequenceKey = prefix + '|' + suffix;

            let sequence = compareSequenceLookup[sequenceKey];
            if (sequence === undefined) {
                compareSequenceLookup[sequenceKey] = 2;
            } else {
                suffix = '.' + sequence + suffix;
                compareSequenceLookup[sequenceKey]++;
            }

            compareHelper(dir, actual, prefix, suffix, format);
        }
    };

    run(dir, helpers, done);
}

exports.scanDir = function(autoTestDir, run, options) {
    options = options || {};
    var testGroup = path.basename(autoTestDir);
    var describeFunc = describe;

    if(enabledTest && testGroup === enabledTest) {
        describeFunc = describe.only;
    }

    describeFunc('autotest', function() {
        if(options.timeout) {
            this.timeout(options.timeout);
        }
        fs.readdirSync(autoTestDir)
            .forEach(function(name) {
                if (/^(\.|\~)/.test(name)) {
                    return;
                }

                if (enabledTests && !enabledTests[name] && !enabledTests[testGroup] && !enabledTests[testGroup+'/'+name]) {
                    return;
                }

                var testFunc = options.type === 'describe' ? describe : it;
                var dir = path.join(autoTestDir, name);

                if (enabledTest && (name === enabledTest || testGroup+'/'+name === enabledTest)) {
                    testFunc = testFunc.only;
                }

                if (name.endsWith('.skip') || options.skip && options.skip(name, dir)) {
                    testFunc = testFunc.skip;
                }

                testFunc(options.name !== false ? name : '', function(done) {
                    autoTest(name, dir, run, options, done);
                });
            });
    });
};
