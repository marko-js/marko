"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/scriptlet-line-block/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

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

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/scriptlet-line-block/template.marko"
  };
