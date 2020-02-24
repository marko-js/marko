module.exports = function addAsyncTestSuites(name, fn) {
    var originalDescribe = global.describe;
    var originalIt = global.it;
    // Trick mocha into running the before hook without any tests.
    var runner = describe(name, () => {
        it(""); // Executes the before even though there are not tests yet.
        before(function() {
            // Test init can take a while. (This does not change the timeout of the actual tests, just the lasso compile time).
            this.timeout(20000);

            // Remove empty test inserted above.
            runner.tests.splice(0, 1);

            // patch describe to add to the current suite
            var patchedDescribe = (global.describe = function(name, fn) {
                return moveSuite(originalDescribe(name, fn), runner);
            });
            patchedDescribe.only = function(name, fn) {
                return moveSuite(originalDescribe.only(name, fn), runner);
            };
            patchedDescribe.skip = function(name, fn) {
                return moveSuite(originalDescribe.skip(name, fn), runner);
            };

            // patch it to add to the current suite
            var patchedIt = (global.it = function(name, fn) {
                return moveTest(originalIt(name, fn), runner);
            });
            patchedIt.only = function(name, fn) {
                return moveTest(originalIt.only(name, fn), runner);
            };
            patchedIt.skip = function(name, fn) {
                return moveTest(originalIt.skip(name, fn), runner);
            };

            return fn();
        });

        after(function() {
            // restore the previous describe
            global.describe = originalDescribe;
        });
    });
};

function moveSuite(suite, newParent) {
    var oldSuites = suite.parent.suites;
    newParent.addSuite(suite);
    oldSuites.splice(oldSuites.indexOf(suite), 1);
    return suite;
}

function moveTest(test, newParent) {
    newParent.addTest(test);
    return test;
}
