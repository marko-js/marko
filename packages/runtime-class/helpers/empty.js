var notEmpty = require("./notEmpty");
module.exports = function empty(o) {
  return !notEmpty(o);
};
