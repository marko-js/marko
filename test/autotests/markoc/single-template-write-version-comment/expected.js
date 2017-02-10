var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(data.name) +
    "!");
}

marko_template._ = render;

marko_template.meta = {};
