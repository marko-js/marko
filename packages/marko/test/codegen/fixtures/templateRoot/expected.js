"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  var foo = "bar";

  out.w("<div class=\"foo\"><span class=\"bar\"></span></div>");
}

marko_template._ = render;

marko_template.meta = {};
