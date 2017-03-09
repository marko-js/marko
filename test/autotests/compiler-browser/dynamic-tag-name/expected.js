"use strict";

var marko_template = module.exports = require("marko/vdom").t();

function render(input, out) {
  var data = input;

  out.e((foo ? "foo" : "bar").toUpperCase(), null, 0);
}

marko_template._ = render;
