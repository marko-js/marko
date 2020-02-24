"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/scriptlet-line-block/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out, __component, component, state) {
  var data = input;

  var foo = 123;

  function bar() {
  
  }
  var baz = 456;

  out.w("<div>");

  console.log('foo');

  out.w(" Hello there " +
    marko_escapeXml(name) +
    "</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/scriptlet-line-block/template.marko"
  };
