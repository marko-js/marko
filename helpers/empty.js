var notEmpty = require("./notEmpty");

module.exports = function(o) {
    require("complain")("empty is deprecated.");
    return !notEmpty(o);
};
