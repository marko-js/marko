require('./util/patch-module');
require('marko/node-require').install();

describe('marko-widgets (server)', function() {
    require('./util/autotest').runTests(
        require('./autotests/widgets-server/autotests.tests'),
        function run(testFunc, done) {
            var helpers = {};

            if (testFunc.length === 1) {
                testFunc(helpers);
                done();
            } else {
                testFunc(helpers, done);
            }
        });
});