function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    if (true) {
      out.w("A");
    }

    out.w("B");

    if (true) {
      out.w("C");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
