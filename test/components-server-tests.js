require('./util/test-init');
require('marko/node-require').install();

describe('components-server', function() {
    require('./util/autotest').runTests(
        require('./autotests/components-server/autotests.tests'),
        function run(testFunc, done) {
            require('marko/compiler').configure({ output: 'html', assumeUpToDate: false });
            var helpers = {};

            if (testFunc.length === 1) {
                testFunc(helpers);
                done();
            } else {
                testFunc(helpers, done);
            }
        });
});
