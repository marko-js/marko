var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(data, out) {
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
