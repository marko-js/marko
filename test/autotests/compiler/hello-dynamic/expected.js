var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
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

marko_template._ = render;
