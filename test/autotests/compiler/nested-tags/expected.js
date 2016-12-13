var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
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

marko_template._ = render;
