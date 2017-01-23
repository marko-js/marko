'use strict';

var BrowserHelpers = require('./util/BrowserHelpers');

if (typeof window !== 'undefined') {
    describe('marko-widgets deprecated (browser)', function() {
        require('./util/autotest').runTests(
            require('./autotests/widgets-browser-deprecated/autotests.tests'),
            function run(testFunc, done) {
                var helpers = new BrowserHelpers();

                require('marko/jquery').patchWidget(window.$);
                require('marko/ready').patchWidget();

                function cleanup() {
                    delete require('marko/widgets/Widget').prototype.$;
                    delete require('marko/widgets/Widget').prototype.ready;
                }

                try {
                    if (testFunc.length === 1) {
                        testFunc(helpers);
                        helpers._cleanup();
                        cleanup();
                        done();
                    } else {
                        testFunc(helpers, function(err) {
                            helpers._cleanup();
                            cleanup();
                            done(err);
                        });
                    }
                } catch(e) {
                    cleanup();
                    throw e;
                }

            });
    });
}