var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(data, out) {
  marko_forEach(data.colors, function(color) {
    out.w(marko_escapeXml(color));
  });
}

marko_template._ = render;
