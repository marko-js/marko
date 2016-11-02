var fs = require('fs');
var path = require('path');
var testFilter = require('./util/autotest/test-filter');
var compiler = require('marko/compiler');
var expect = require('chai').expect;

require('marko/node-require').install();
require('./util/patch-module');

describe('marko-widgets (compilation)', function() {
    var testsPath = path.join(__dirname, './autotests/widgets-compilation');
    var tests = fs.readdirSync(testsPath);

    tests.forEach(function(testName) {
        var itFunc = testFilter.isOnlyTest(testName) ? it.only : it;

        itFunc('[' + testName + '] ', function(done) {

            var testPath = path.join(testsPath, testName);
            var templatePath = path.join(testPath, 'index.marko');
            var mainPath = path.join(testPath, 'test.js');
            var main;

            if (fs.existsSync(mainPath)) {
                main = require(mainPath);
            }

            if (main && main.checkError) {
                var e;

                try {
                    compiler.compileFile(templatePath);
                } catch(_e) {
                    e = _e;
                }

                if (!e) {
                    throw new Error('Error expected');
                }

                main.checkError(e);
                done();
            } else {
                var actualSrc = compiler.compileFile(templatePath, main && main.compilerOptions);
                var actualPath = path.join(testPath, './actual.js');
                var expectedPath = path.join(testPath, './expected.js');
                fs.writeFileSync(actualPath, actualSrc);
                var expectedSrc = fs.readFileSync(expectedPath, 'utf-8');
                expect(actualSrc).to.equal(expectedSrc);
                done();
            }
        });
    });
});