function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('Hello John');
  };
}
(module.exports = require("marko-v2").c(__filename)).c(create);