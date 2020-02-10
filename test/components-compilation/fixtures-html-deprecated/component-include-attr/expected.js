"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    marko_component = require("./"),
    marko_rendererLegacy = require("marko/src/runtime/components/legacy/renderer-legacy"),
    marko_keyAttr = require("marko/src/core-tags/components/helpers/markoKeyAttr"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div data-widget=\"/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index\"" +
    marko_attr("id", __component.elId()) +
    marko_attr("data-marko-key", marko_keyAttr("@_wbind", __component)) +
    "><h1>Header</h1><div>");

  if ((typeof input.renderBody) === "function") {
    marko_dynamicTag(out, input, null, null, null, null, __component, "2");
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
