var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  var foo = "Hello World";

  out.w("<div></div>");
}

template._ = render;
