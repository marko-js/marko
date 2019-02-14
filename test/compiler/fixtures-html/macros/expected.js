"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/macros/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderTree(out, macroInput) {
    var node = macroInput.node

    out.w("Name: " +
      marko_escapeXml(node.name) +
      " Children: ");

    if (node.children) {
      out.w("<ul>");

      var for__1 = 0;

      marko_forEach(node.children, function(child) {
        var keyscope__2 = "[" + ((for__1++) + "]");

        out.w("<li>");

        marko_dynamicTag(macro_renderTree, {
            node: child
          }, null, out, __component, "4" + keyscope__2);

        out.w("</li>");
      });

      out.w("</ul>");
    }
  }

  marko_dynamicTag(macro_renderTree, {
      node: input.node
    }, null, out, __component, "5");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/macros/template.marko"
  };
