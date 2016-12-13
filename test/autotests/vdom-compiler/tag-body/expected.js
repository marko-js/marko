var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(data, out) {
  test_hello_tag({
      name: "World",
      renderBody: function renderBody(out) {
        out.t("Body content");
      }
    }, out);
}

marko_template._ = render;
