"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<span class=\"foo1\"></span><div class=\"bar\"></div><div class=\"baz\"></div>");
}

marko_template._ = render;

marko_template.meta = {};
