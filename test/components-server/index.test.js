require("../__util__/test-init");

var autotest = require("../autotest");

autotest("fixtures", ({ test, resolve, snapshot }) => {
    test(done => {
        var testFunc = require(resolve("test.js"));
        if (testFunc.length <= 1) {
            testFunc(snapshot);
            done();
        } else {
            testFunc(snapshot, done);
        }
    });
});
