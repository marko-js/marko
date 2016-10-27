function create(__markoHelpers) {
  return function render(data, out) {
    var foo = "Hello World";

    out.w("<div></div>");
  };
}

module.exports = require("marko/html").c(__filename, create);
