var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(data, out) {
  marko_forEach(data.colors, function(color) {
    out.w(marko_escapeXml(color));
  });
}

template._ = render;
