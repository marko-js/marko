function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_import_var_tag = marko_loadTag(require("./tags/test-import-var/renderer"));

  return function render(data, out) {
    test_import_var_tag({
        name: "World",
        foo: data.foo,
        bar: data.bar,
        renderBody: function renderBody(out) {
          out.w("This is the body content");
        }
      }, out);
  };
}

module.exports = require("marko/html").c(__filename, create);
