function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      __tag = __helpers.t,
      test_body_function_renderer = __renderer(require("../../../taglib/scanned-tags/test-body-function/renderer"));

  return function render(data, out) {
    __tag(out, test_body_function_renderer, {
      "name": "World",
      "myBody": function myBody(foo, bar) {
        out.w("This is the body content");
      }
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
