require('./util/patch-module');
require('marko/node-require').install();

describe('marko/components (server)', function() {
    require('./util/autotest').runTests(
        require('./autotests/components-server/autotests.tests'),
        function run(testFunc, done) {
            require('marko/compiler').configure({ output: 'html' });
            var helpers = {};

            if (testFunc.length === 1) {
                testFunc(helpers);
                done();
            } else {
                testFunc(helpers, done);
            }
        });
});