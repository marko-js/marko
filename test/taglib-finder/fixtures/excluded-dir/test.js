var nodePath = require('path');

exports.dir = 'a/b-excluded';

exports.before = function (taglibFinder) {
    taglibFinder.excludeDir(nodePath.join(__dirname, 'a/b-excluded'));
};

exports.after = function (taglibFinder) {
    taglibFinder.reset();
};