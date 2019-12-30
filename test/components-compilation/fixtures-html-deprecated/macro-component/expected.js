"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/macro-component/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderButton(out, macroInput) {
    var color = macroInput.color

    out.w("<button>" +
      marko_escapeXml(color) +
      "</button>");
  }

  out.w("<div>");

  var $for$0 = 0;

  marko_forOf([
      "red",
      "green",
      "blue"
    ], function(color) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    marko_dynamicTag(out, macro_renderButton, function() {
      return {
          color: color
        };
    }, null, null, null, __component, "2" + $keyScope$0);
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/macro-component/index.marko",
    component: "./"
  };
