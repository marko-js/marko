"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out) {
  var data = input;

  out.w("Hello" +
    data.name +
    "!");

  if (notEmpty(data.colors)) {
    out.w("<ul class=colors>");

    forEach(data.colors, function(color) {
      out.w("<li class=color>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  }
}

marko_template._ = render;

marko_template.meta = {};
