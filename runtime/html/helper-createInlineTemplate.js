var Template = require('./Template');

module.exports = function(path, renderFunc) {
    return new Template(path, renderFunc);
};