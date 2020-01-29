"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/static-tag-custom-root-element/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

var foo = 123;

function bar() {

}
var baz = 456;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/static-tag-custom-root-element/template.marko"
  };
