"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/include-whitespace-preserved/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>\n    ");

  if (typeof data.renderBody === "string") {
    out.w(marko_escapeXml(data.renderBody));
  } else {
    marko_dynamicTag(out, data.renderBody, {}, null, null, __component, "1");
  }

  out.w("\n</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/include-whitespace-preserved/index.marko",
    component: "./"
  };
