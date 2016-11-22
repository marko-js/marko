var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  var foo = "bar";

  out.w("<div></div>");
}

template._ = render;
