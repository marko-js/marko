var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  var foo = "bar";

  out.w("<div class=\"foo\"><span class=\"bar\"></span></div>");
}

marko_template._ = render;
