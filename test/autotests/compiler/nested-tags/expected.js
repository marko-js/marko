var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_nested_tags_overlay_tag = marko_loadTag(require("./tags/test-nested-tags-overlay/renderer"));

function render(data, out) {
  test_nested_tags_overlay_tag({
      header: data.header,
      body: {
          className: "my-body",
          renderBody: function renderBody(out) {
            out.w("Body content");
          }
        },
      footer: {
          className: "my-footer",
          renderBody: function renderBody(out) {
            out.w("Footer content");
          }
        }
    }, out);
}

template._ = render;
