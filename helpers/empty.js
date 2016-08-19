var notEmpty = require('./notEmpty');

module.exports = function (o) {
    return !notEmpty(o);
};