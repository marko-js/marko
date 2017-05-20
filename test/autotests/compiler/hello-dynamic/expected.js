"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(input.name) +
    "! Hello " +
    marko_str(input.name) +
    "! Hello " +
    marko_str(input.missing) +
    "!");
}

marko_template._ = render;

marko_template.meta = {};
