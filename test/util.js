require('./patch-module');

var nodePath = require('path');
var fs = require('fs');

var StringBuilder = require('raptor-strings/StringBuilder');

var ONLY_TEST = process.env.TEST;

// We provide a simple way to run a single test by allowing
// a "TEST=<test_name>" environment variable
//
// TEST=if-else npm run test-fast

function createTestRender(options) {
    var extname = options.ext || '.marko';

    return function testRender(dir, templateData, expectedFile, options, done) {
        var templatePath = nodePath.join(dir, 'template' + extname);
        if (!expectedFile) {
            expectedFile = nodePath.join(dir, 'expected.html');
        }

        var actualPath = nodePath.join(dir, 'actual.html');
        options = options || {};

        var marko = require('../');

        require('../compiler').defaultOptions.checkUpToDate = false;

        var AsyncWriter = marko.AsyncWriter;
        var out = options.out || new AsyncWriter(new StringBuilder());

        var template;
        var hadError = false;

        try {
            template = marko.load(templatePath);
        } catch(err) {
            hadError = true;
            if (options.handleCompileError) {
                try {
                    options.handleCompileError(err);
                    done();
                } catch(err) {
                    done(err);
                }
            } else {
                done(err);
            }
            return;
        }

        if (options.handleCompileError && !hadError) {
            throw new Error('Error expected for test case, but no error occurred. Template: ' + templatePath);
        }

        template.render(templateData, out)
            .on('finish', function() {
                var output = out.getOutput();

                fs.writeFileSync(actualPath, output, {encoding: 'utf8'});

                var expected;
                try {
                    expected = options.expected || fs.readFileSync(expectedFile, {encoding: 'utf8'});
                }
                catch(e) {
                    expected = 'TBD';
                    fs.writeFileSync(expectedFile, expected, {encoding: 'utf8'});
                }

                if (output !== expected) {
                    throw new Error('Unexpected output for "' + templatePath + '":\nEXPECTED (' + expectedFile + '):\n---------\n' + expected +
                        '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
                }

                done();
            })
            .on('error', function(err) {
                if (options.handleError) {
                    try {
                        options.handleError(err);
                        done();
                    } catch(err) {
                        done(err);
                    }
                } else {
                    done(err);
                }
            })
            .end();

    };
}

exports.loadRenderTests = function(dirname, desc, options) {
    var testRender = createTestRender(options);

    function loadTest(testInfo, desc, basename, dir) {
        it(desc, function(done) {
            var templateData;

            if (testInfo.getTemplateData) {
                templateData = testInfo.getTemplateData();
            } else {
                templateData = testInfo.templateData;
            }

            var expectedFile = testInfo.expectedFile;

            if (!expectedFile) {
                expectedFile = nodePath.join(dir, 'expected.html');
            }

            var testOptions = testInfo.options;

            testRender(dir, templateData || {}, expectedFile, testOptions || {}, done);
        });
    }

    describe(desc, function() {
        dirname = nodePath.join(__dirname, dirname);

        var testDirs = fs.readdirSync(dirname);
        testDirs.forEach(function(testDir) {
            var basename = testDir;

            if (ONLY_TEST && basename !== ONLY_TEST) {
                return;
            }

            testDir = nodePath.join(dirname, testDir);

            var testInfoFile = nodePath.join(testDir, 'test.js');
            if (!fs.existsSync(testInfoFile)) {
                return;
            }

            var testInfo = require(testInfoFile);
            if (testInfo.tests) {
                testInfo.tests.forEach(function(testInfo, i) {
                    var desc = testInfo.desc;

                    if (!desc) {
                        desc = basename + '(' + (i+1) + ')';
                    }
                    loadTest(testInfo, desc, basename, testDir);
                });
            } else {
                loadTest(testInfo, testInfo.desc || basename, basename, testDir);
            }

        });
    });
};