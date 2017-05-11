"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("Hello" +
    data.name +
    "!");

  if (notEmpty(data.colors)) {
    out.w("<ul class=\"colors\">");

    forEach(data.colors, function(color) {
      out.w("<li class=\"color\">" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  }
}

marko_template._ = render;

marko_template.meta = {};
