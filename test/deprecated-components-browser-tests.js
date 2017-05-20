'use strict';
require('./util/test-init');

var BrowserHelpers = require('./util/BrowserHelpers');

if (typeof window !== 'undefined') {
    describe('deprecated-components-browser', function() {
        require('./util/autotest').runTests(
            require('./autotests/components-browser-deprecated/autotests.tests'),
            function run(testFunc, done) {
                var helpers = new BrowserHelpers();

                require('marko/jquery').patchComponent(window.$);
                require('marko/ready').patchComponent();

                function cleanup() {
                    delete require('marko/components/Component').prototype.$;
                    delete require('marko/components/Component').prototype.ready;
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
