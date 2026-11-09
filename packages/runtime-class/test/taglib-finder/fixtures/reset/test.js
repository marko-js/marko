var nodePath = require("path");
var assert = require("assert/strict");

exports.check = function (taglibFinder) {
  var finderDir = nodePath.join(__dirname, "a/b/c");

  function getPaths() {
    return taglibFinder.find(finderDir, [], ["components"]).map((taglib) => {
      return taglib.path;
    });
  }

  var pathsBeforeExclude = getPaths();

  taglibFinder.excludePackage("excluded-dependency");

  taglibFinder.clearCache();

  var pathsAfterExclude = getPaths();

  taglibFinder.reset();

  var pathsAfterReset = getPaths();

  assert.notDeepEqual(pathsBeforeExclude, pathsAfterExclude);
  assert.deepEqual(pathsBeforeExclude, pathsAfterReset);
};
