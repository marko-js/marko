function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_addNestedVariable = __loadTag(require("../../../taglib/scanned-tags/test-addNestedVariable/renderer"));

  return function render(data, out) {
    test_addNestedVariable({
        renderBody: function renderBody(out, foo) {
          out.w("Hello " +
            escapeXml(foo) +
            "!");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
