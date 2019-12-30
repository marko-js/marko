"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/include-whitespace-preserved/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>\n    ");

  if ((typeof data.renderBody) === "string") {
    out.w(marko_escapeXml(data.renderBody));
  } else {
    marko_dynamicTag(out, data.renderBody, null, null, null, null, __component, "1");
  }

  out.w("\n</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/include-whitespace-preserved/index.marko",
    component: "./"
  };
