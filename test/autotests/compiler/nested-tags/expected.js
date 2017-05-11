"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_nested_tags_overlay_tag = marko_loadTag(require("./tags/test-nested-tags-overlay/renderer"));

function render(input, out) {
  var data = input;

  test_nested_tags_overlay_tag({
      header: input.header,
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

marko_template.meta = {
    tags: [
      "./tags/test-nested-tags-overlay/renderer"
    ]
  };
