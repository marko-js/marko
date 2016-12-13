var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  var foo = "Hello World";

  out.w("<div></div>");
}

marko_template._ = render;
