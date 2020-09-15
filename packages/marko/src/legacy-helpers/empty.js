var notEmpty = require("./notEmpty");
module.exports = function empty(o) {
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    require("complain")("empty is deprecated.");
  }

  return !notEmpty(o);
};
