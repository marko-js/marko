var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  var foo = "Hello World";

  out.w("<div></div>");
}

marko_template._ = render;
