var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(data, out) {
  out.w("Hello " +
    marko_escapeXml(data.name) +
    "! ");

  if (data.colors.length) {
    out.w("<ul>");

    marko_forEach(data.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }

  if (data.colors.length) {
    out.w("<ul>");

    marko_forEach(data.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }
}

template._ = render;
