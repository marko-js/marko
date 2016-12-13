var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var foo = "Hello World";

function render(data, out) {
  out.w("<div></div>");
}

marko_template._ = render;
