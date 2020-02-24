"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out) {
  var data = input;

  marko_forOf(data.colors, function(color) {
    out.w(marko_escapeXml(color));
  });
}

marko_template._ = render;

marko_template.meta = {};
