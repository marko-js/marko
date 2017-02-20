'use strict';

var BrowserHelpers = require('./util/BrowserHelpers');

if (typeof window !== 'undefined') {
    describe('marko-widgets (browser)', function() {
        require('./util/autotest').runTests(
            require('./autotests/widgets-browser/autotests.tests'),
            function run(testFunc, done) {
                var helpers = new BrowserHelpers();

                if (testFunc.length === 1) {
                    testFunc(helpers);
                    helpers._cleanup();
                    done();
                } else {
                    testFunc(helpers, function(err) {
                        helpers._cleanup();
                        done(err);
                    });
                }
            });
    });
}