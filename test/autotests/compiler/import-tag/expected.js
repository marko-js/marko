"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    bar = require("./bar"),
    foo = bar.f;

require("./foo");

function render(input, out) {
  var data = input;
}

marko_template._ = render;

marko_template.meta = {};
