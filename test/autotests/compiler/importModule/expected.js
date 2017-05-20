"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    foo = require("./foo");

function render(input, out) {
  var data = input;

  foo();
}

marko_template._ = render;

marko_template.meta = {};
