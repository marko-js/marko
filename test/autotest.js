'use strict';

var fs = require('fs');
var enabledTest = process.env.TEST;
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

function autoTest(name, dir, run, options, done) {
    var compareExtension = (options && options.compareExtension) || '.js';
    var isJSON = compareExtension === '.json';

    var actualPath = path.join(dir, 'actual' + compareExtension);
    var expectedPath = path.join(dir, 'expected' + compareExtension);

    function verify(actual) {
        if (actual === '$PASS$') {
            return;
        }

        var actualJSON = isJSON ? JSON.stringify(actual, null, 2) : null;

        fs.writeFileSync(
            actualPath,
            isJSON ? actualJSON : actual,
            {encoding: 'utf8'});

        var expected;

        try {
            expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
        } catch(e) {
            expected = isJSON ? '"TBD"' : 'TBD';
            fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
        }

        var expectedJSON;

        if (isJSON) {
            expectedJSON = expected;
            expected = JSON.parse(expectedJSON);
        }

        assert.deepEqual(
                (isJSON ? JSON.parse(actualJSON) : actual),
                expected,
                'Unexpected output for "' + name + '":\nEXPECTED (' + expectedPath + '):\n---------\n' +
                (isJSON ? expectedJSON : expected) +
                '\n---------\nACTUAL (' + actualPath + '):\n---------\n' +
                (isJSON ? actualJSON : actual) +
                '\n---------');
    }

    try {
        fs.unlinkSync(actualPath);
    } catch(e) {}

    if (done) {
        // Async test
        run(dir, function(err, actual) {
            if (err) {
                return done(err);
            }

            verify(actual);
            done();
        });
    } else {
        let actual = run(dir);
        verify(actual);
    }
}

exports.scanDir = function(autoTestDir, run, options) {
    describe('autotest', function() {
        var files;
        try {
            files = fs.readdirSync(autoTestDir);
        } catch(e) {
            console.warn('autotest directory does not exist: ' + autoTestDir);
        }

        if (files) {
            files.forEach(function(name) {
                    if (name.charAt(0) === '.') {
                        return;
                    }

                    if (enabledTests && !enabledTests[name]) {
                        return;
                    }

                    var itFunc = it;

                    if (enabledTest && name === enabledTest) {
                        itFunc = it.only;
                    }

                    var dir = path.join(autoTestDir, name);

                    if (run.length === 2) {
                        itFunc(`[${name}] `, function(done) {
                            autoTest(name, dir, run, options, done);
                        });
                    } else {
                        itFunc(`[${name}] `, function() {
                            autoTest(name, dir, run, options);
                        });
                    }



                });
        }

        var pendingFiles;
        try {
            pendingFiles = fs.readdirSync(autoTestDir + '-pending');
        } catch(e) {}

        if (pendingFiles) {
            pendingFiles.forEach(function(name) {
                    if (name.charAt(0) === '.') {
                        return;
                    }

                    xit(`[${name}] `, function() {
                    });

                });
        }
    });
};