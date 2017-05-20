"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    foo = "Hello World";

function render(input, out) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {};
