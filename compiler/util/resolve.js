var resolveFrom = require('resolve-from');

module.exports = function(target, from) {
    // NOTE: Arguments are reversed
    return resolveFrom(from, target);
};