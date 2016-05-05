function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      foo = require("./foo");

  return function render(data, out) {
    foo();
  };
}

(module.exports = require("marko").c(__filename)).c(create);
