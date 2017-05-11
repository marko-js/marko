"use strict";

var marko_template = module.exports = require("marko/src/vdom").t();

function render(input, out) {
  var data = input;

  out.ed(foo ? "foo" : "bar", null, 0);
}

marko_template._ = render;
