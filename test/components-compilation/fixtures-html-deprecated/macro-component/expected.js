"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/macro-component/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_dynamicTag = marko_helpers.d;

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

  marko_forEach([
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

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/macro-component/index.marko",
    component: "./"
  };
