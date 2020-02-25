"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/hello-dynamic/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = require("marko/src/runtime/helpers/to-string");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(input.name) +
    "! Hello " +
    marko_str(input.name) +
    "! Hello " +
    marko_str(input.missing) +
    "!");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/hello-dynamic/template.marko"
  };
