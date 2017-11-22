'use strict';

require('../__util__/test-init');

var BrowserHelpers = require('../__util__/BrowserHelpers');

if (typeof window !== 'undefined') {
    describe('deprecated-components-browser', function () {
        require('../__util__/autotest').runTests(require('./fixtures/autotests.tests'), function run(testFunc, done) {
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
                    testFunc(helpers, function (err) {
                        helpers._cleanup();
                        cleanup();
                        done(err);
                    });
                }
            } catch (e) {
                cleanup();
                throw e;
            }
        });
    });
}