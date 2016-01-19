function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  var name = '${name}<div if(foo)></div>';

  return function render(data, out) {
    out.w("Hello " +
      escapeXml(name) +
      "!");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
