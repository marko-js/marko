"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    marko_component = require("./"),
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div data-widget=\"/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index\"" +
    marko_attr("id", __component.elId()) +
    "><h1>Header</h1><div>");

  if (typeof input.renderBody === "function") {
    marko_dynamicTag(input, {}, out, __component, "2");
  } else {
    out.w(marko_escapeXml(input.renderBody));
  }

  out.w("</div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    component: "./"
  };
