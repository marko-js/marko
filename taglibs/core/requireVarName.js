var resolveFrom = require('resolve-from');
var nodePath = require('path');

module.exports = function(target, from) {
    var resolved = resolveFrom(from, target);
    resolved = nodePath.relative(from, resolved);
    return resolved;
};