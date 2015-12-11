function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    for (var i = 0; i < 0; i++) {
      console.log(i);
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
