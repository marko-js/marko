var marko_template = module.exports = require("marko/html").t(__filename),
    foo = "Hello World";

function render(data, out) {
  out.w("<div></div>");
}

marko_template._ = render;
