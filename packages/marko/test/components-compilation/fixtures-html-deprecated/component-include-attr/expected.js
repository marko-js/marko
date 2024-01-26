"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    marko_interopRequireDefault = require("marko/src/runtime/helpers/interop-require"),
    marko_component = marko_interopRequireDefault(require("./")),
    marko_rendererLegacy = require("marko/src/runtime/components/legacy/renderer-legacy"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dataMarko = require("marko/src/runtime/html/helpers/data-marko"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div" +
    marko_dataMarko(out, __component, 0, "@_wbind") +
    " data-widget=/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index" +
    marko_attr("id", __component.elId()) +
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
