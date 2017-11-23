var nodePath = require('path');
var expect = require('chai').expect;

exports.check = function (taglibFinder) {
    var finderDir = nodePath.join(__dirname, 'a/b/c');

    function getPaths() {
        return taglibFinder.find(finderDir, []).map(taglib => {
            return taglib.path;
        });
    }

    var pathsBeforeExclude = getPaths();

    taglibFinder.excludePackage('excluded-dependency');

    taglibFinder.clearCache();

    var pathsAfterExclude = getPaths();

    taglibFinder.reset();

    var pathsAfterReset = getPaths();

    expect(pathsBeforeExclude).to.not.deep.equal(pathsAfterExclude);
    expect(pathsBeforeExclude).to.deep.equal(pathsAfterReset);
};