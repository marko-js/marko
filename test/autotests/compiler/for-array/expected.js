"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  var color,
      color__i,
      color__array,
      color__len;

  for (color__i = 0, color__array = [
      "red",
      "green",
      "blue"
    ], color__len = color__array && color__array.length; color__i < color__len; color__i++) {
    color = color__array[color__i];

    out.w(marko_escapeXml(color));
  }
}

marko_template._ = render;

marko_template.meta = {};
