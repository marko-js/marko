var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    test_addNestedVariable_tag = marko_loadTag(require("./tags/test-addNestedVariable/renderer"));

function render(data, out) {
  test_addNestedVariable_tag({
      renderBody: function renderBody(out, foo) {
        out.w("Hello " +
          marko_escapeXml(foo) +
          "!");
      }
    }, out);
}

marko_template._ = render;
