"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(input, out) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(input.name) +
    "! ");

  if (input.colors.length) {
    out.w("<ul>");

    marko_forEach(input.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }

  if (input.colors.length) {
    out.w("<ul>");

    marko_forEach(input.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }
}

marko_template._ = render;

marko_template.meta = {};
