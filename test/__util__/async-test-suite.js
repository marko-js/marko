module.exports = function addAsyncTestSuites(fn) {
  // Trick mocha into running the before hook without any tests.
  var runner = it('').parent; 
  var originalDescribe = global.describe;

  before(function () {
    // Test init can take a while. (This does not change the timeout of the actual tests, just the lasso compile time).
    this.timeout(20000);

    // Remove empty test inserted above.
    runner.tests.splice(0, 1);
    
    // patch describe to add to the current suite
    var patchedDescribe = global.describe = function(name, fn) {
      return moveSuite(originalDescribe(name, fn), runner);
    };
    patchedDescribe.only = function(name, fn) {
      return moveSuite(originalDescribe.only(name, fn), runner);
    }
    patchedDescribe.skip = function(name, fn) {
      return moveSuite(originalDescribe.skip(name, fn), runner);
    }

    return fn();
  });

  after(function () {
    // restore the previous describe
    global.describe = originalDescribe;
  });
}

function moveSuite(suite, newParent) {
  var oldSuites = suite.parent.suites;
  newParent.addSuite(suite);
  oldSuites.splice(oldSuites.indexOf(suite), 1);
  return suite;
}

