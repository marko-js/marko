require('../__util__/test-init');
require('marko/node-require').install();

describe('components-server', function () {
    require('../__util__/autotest').runTests(require('./fixtures/autotests.tests'), function run(testFunc, done) {
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