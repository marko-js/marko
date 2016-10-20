function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_hello = marko_loadTag(require("./tags/test-hello/renderer"));

  return function render(data, out) {
    test_hello({
        name: "World",
        renderBody: function renderBody(out) {
          out.t("Body content");
        }
      }, out);
  };
}

module.exports = require("marko/vdom").c(__filename, create);
