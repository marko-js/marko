function create(__markoHelpers) {
  return function render(data, out) {
    var foo = "bar";

    out.w("<div class=\"foo\"><span class=\"bar\"></span></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
