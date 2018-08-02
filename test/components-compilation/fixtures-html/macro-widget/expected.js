"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/macro-widget/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  function macro_renderButton(color, out, renderBody) {
    out.w("<button" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "handleColorClick", false, [
            color
          ])
      }, false) +
      ">" +
      marko_escapeXml(color) +
      "</button>");
  }

  out.w("<div>");

  var for__2 = 0;

  marko_forEach([
      "red",
      "green",
      "blue"
    ], function(color) {
    var keyscope__3 = "[" + ((for__2++) + "]");

    macro_renderButton(color, out);
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/macro-widget/index.marko",
    component: "./"
  };
