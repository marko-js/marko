"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/nested-tags/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_nested_tags_overlay_tag = marko_loadTag(require("./tags/test-nested-tags-overlay/renderer"));

function render(input, out, __component, component, state) {
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
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/nested-tags/template.marko",
    tags: [
      "./tags/test-nested-tags-overlay/renderer"
    ]
  };
