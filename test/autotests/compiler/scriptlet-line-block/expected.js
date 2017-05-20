"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
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

marko_template._ = render;

marko_template.meta = {};
