var fs = require('fs');
var enabledTest = process.env.TEST;
var path = require('path');


function autoTest(name, dir, run, options) {
    var compareExtension = (options && options.compareExtension) || '.js';
    var actualPath = path.join(dir, 'actual' + compareExtension);
    var expectedPath = path.join(dir, 'expected' + compareExtension);

    var actual = run(dir);

    fs.writeFileSync(actualPath, actual, {encoding: 'utf8'});

    var expected;

    try {
        expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
    } catch(e) {
        expected = 'TBD';
        fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
    }

    if (actual !== expected) {
        throw new Error('Unexpected output for "' + name + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
            '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + actual + '\n---------');
    }
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