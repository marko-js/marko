exports.dir = 'a/b/c';

exports.before = function (taglibFinder) {
    taglibFinder.excludePackage('excluded-dependency');
};

exports.after = function (taglibFinder) {
    taglibFinder.reset();
};