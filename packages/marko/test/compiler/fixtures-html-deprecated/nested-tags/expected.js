"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tags/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_nested_tags_overlay_tag = marko_loadTag(require("./tags/test-nested-tags-overlay/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_nested_tags_overlay_tag({
      header: input.header,
      body: {
          className: "my-body",
          renderBody: function(out) {
            out.w("Body content");
          }
        },
      footer: {
          className: "my-footer",
          renderBody: function(out) {
            out.w("Footer content");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tags/template.marko",
    tags: [
      "./tags/test-nested-tags-overlay/renderer"
    ]
  };
