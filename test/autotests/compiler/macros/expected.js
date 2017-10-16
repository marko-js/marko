"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler/macros/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderTree(node, out, renderBody) {
    out.w("Name: " +
      marko_escapeXml(node.name) +
      " Children: ");

    if (node.children) {
      out.w("<ul>");

      marko_forEach(node.children, function(child) {
        out.w("<li>");

        macro_renderTree(child, out);

        out.w("</li>");
      });

      out.w("</ul>");
    }
  }

  macro_renderTree(input.node, out);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
