"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out) {
  var data = input;

  out.w("<div foo=\"Hello " +
    marko_escapeXmlAttr(input.name) +
    "\"></div>");

  var foo = "Hello " + input.name;
}

marko_template._ = render;

marko_template.meta = {};
