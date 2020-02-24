"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/macros/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderTree(out, macroInput) {
    var node = macroInput.node;

    out.w(" Name: " +
      marko_escapeXml(node.name) +
      " Children: ");

    if (node.children) {
      out.w("<ul>");

      var $for$0 = 0;

      marko_forOf(node.children, function(child) {
        var $keyScope$0 = "[" + (($for$0++) + "]");

        out.w("<li>");

        marko_dynamicTag(out, macro_renderTree, function() {
          return {
              node: child
            };
        }, null, null, null, __component, "2" + $keyScope$0);

        out.w("</li>");
      });

      out.w("</ul>");
    }
  }

  marko_dynamicTag(out, macro_renderTree, function() {
    return {
        node: input.node
      };
  }, null, null, null, __component, "3");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/macros/template.marko"
  };
