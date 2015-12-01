var fs = require('fs');
var enabledTest = process.env.TEST;
var path = require('path');
var assert = require('assert');

function autoTest(name, dir, run, options) {
    var compareExtension = (options && options.compareExtension) || '.js';
    var isJSON = compareExtension === '.json';

    var actualPath = path.join(dir, 'actual' + compareExtension);
    var expectedPath = path.join(dir, 'expected' + compareExtension);

    var actual = run(dir);
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

                itFunc(`[${name}] `, function() {
                    autoTest(name, dir, run, options);
                });

            });
    });
};