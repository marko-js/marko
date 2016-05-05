function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_body_function = __loadTag(require("./tags/test-body-function/renderer"));

  return function render(data, out) {
    test_body_function({
        name: "World",
        myBody: function myBody(foo, bar) {
          out.w("This is the body content");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
