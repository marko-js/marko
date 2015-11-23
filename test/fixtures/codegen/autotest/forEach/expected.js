function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    forEach(data.colors, function(color) {
      out.w(escapeXml(color));
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
