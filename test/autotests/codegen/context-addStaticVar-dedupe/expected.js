function create(__markoHelpers) {
  var foo = "Hello World";

  return function render(data, out) {
    out.w("<div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
