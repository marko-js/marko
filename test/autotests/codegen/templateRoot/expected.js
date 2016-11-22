var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  var foo = "bar";

  out.w("<div class=\"foo\"><span class=\"bar\"></span></div>");
}

template._ = render;
