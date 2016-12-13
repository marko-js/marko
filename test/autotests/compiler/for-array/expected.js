var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(data, out) {
  var color,
      color__i,
      color__array,
      color__len;

  for (color__i = 0, color__array = [
      "red",
      "green",
      "blue"
    ], color__len = color__array && color__array.length; color__i < color__len; color__i++) {
    color = color__array[color__i];

    out.w(marko_escapeXml(color));
  }
}

marko_template._ = render;
