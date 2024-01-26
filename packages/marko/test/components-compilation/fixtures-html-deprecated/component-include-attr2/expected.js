"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr2/index.marko",
    marko_interopRequireDefault = require("marko/src/runtime/helpers/interop-require"),
    marko_component = marko_interopRequireDefault(require("./component")),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><h1>Header</h1><div>");

  if ((typeof data.renderBody) === "string") {
    out.w(marko_escapeXml(data.renderBody));
  } else {
    marko_dynamicTag(out, data.renderBody, null, null, null, null, __component, "3");
  }

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr2/index.marko",
    component: "./"
  };
