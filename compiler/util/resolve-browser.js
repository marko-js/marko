var nodePath = require('path');

module.exports = function(target, from) {
    return nodePath.join(from, target);
};