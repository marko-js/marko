var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  var foo = "bar";

  out.w("<div></div>");
}

marko_template._ = render;
