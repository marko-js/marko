function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      __tag = __helpers.t,
      test_hello_renderer = __renderer(require("../../../taglib/test-hello/renderer"));

  return function render(data, out) {
    __tag(out, test_hello_renderer, {
      "name": "World"
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
