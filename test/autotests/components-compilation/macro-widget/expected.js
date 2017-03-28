"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {},
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/macro-widget/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderButton(color, out, renderBody) {
    out.w("<button" +
      marko_attr("data-marko", {
        onclick: __component.d("handleColorClick", [
            color
          ])
      }) +
      ">" +
      marko_escapeXml(color) +
      "</button>");
  }

  out.w("<div" +
    marko_attr("id", __component.id) +
    ">");

  marko_forEach([
      "red",
      "green",
      "blue"
    ], function(color) {
    macro_renderButton(color, out);
  });

  out.w("</div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ]
  };
