"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  marko_forEach(data.colors, function(color) {
    out.w(marko_escapeXml(color));
  });
}

marko_template._ = render;

marko_template.meta = {};
