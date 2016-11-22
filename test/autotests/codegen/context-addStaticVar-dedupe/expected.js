var template = require("marko/html").c(__filename);

module.exports = template;

var foo = "Hello World";

function render(data, out) {
  out.w("<div></div>");
}

template._ = render;
