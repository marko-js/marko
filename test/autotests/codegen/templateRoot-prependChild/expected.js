function create(__markoHelpers) {
  return function render(data, out) {
    var foo = "bar";

    out.w("<div></div>");
  };
}

module.exports = require("marko").c(__filename, create);
