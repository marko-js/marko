require("../__util__/test-init");

var autotest = require("../autotest");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
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
