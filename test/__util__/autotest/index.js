'use strict';

require('./node-require');

var testFilter = require('./test-filter');

exports.runTests = function (tests, run, options) {
    describe('autotest', function () {
        tests.forEach(function (testObject) {
            var itFunc = it;

            if (testFilter.isOnlyTest(testObject.name)) {
                itFunc = it.only;
            }

            if (testObject.name.endsWith(".skip")) {
                itFunc = it.skip;
            }

            itFunc('[' + testObject.name + '] ', function (done) {
                run(testObject.test, done);
            });
        });
    });
};

exports.testFilter = testFilter;
