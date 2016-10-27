function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_loadTag = __markoHelpers.t,
      test_addNestedVariable = marko_loadTag(require("./tags/test-addNestedVariable/renderer"));

  return function render(data, out) {
    test_addNestedVariable({
        renderBody: function renderBody(out, foo) {
          out.w("Hello " +
            marko_escapeXml(foo) +
            "!");
        }
      }, out);
  };
}

module.exports = require("marko/html").c(__filename, create);
