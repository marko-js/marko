function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_import_var = __loadTag(require("../../../taglib/scanned-tags/test-import-var/renderer"));

  return function render(data, out) {
    test_import_var({
      name: "World",
      foo: data.foo,
      bar: data.bar,
      renderBody: function renderBody(out) {
        out.w("This is the body content");
      }
    }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
