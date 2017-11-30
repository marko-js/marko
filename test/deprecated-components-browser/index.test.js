'use strict';

require('../__util__/test-init');

var BrowserHelpers = require('../__util__/BrowserHelpers');

if (typeof window !== 'undefined') {
    describe('deprecated-components-browser', function () {
        require('../__util__/autotest').runTests(require('./fixtures/autotests.tests'), function run(testFunc, done) {
            var helpers = new BrowserHelpers();
            try {
                if (testFunc.length === 1) {
                    testFunc(helpers);
                    helpers._cleanup();
                    done();
                } else {
                    testFunc(helpers, function (err) {
                        helpers._cleanup();
                        done(err);
                    });
                }
            } catch (e) {
                helpers._cleanup();
                throw e;
            }
        });
    });
}