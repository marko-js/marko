var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s;

function render(data, out) {
  out.w("Hello " +
    marko_escapeXml(data.name) +
    "! Hello " +
    marko_str(data.name) +
    "! Hello " +
    marko_str(data.missing) +
    "!");
}

template._ = render;
