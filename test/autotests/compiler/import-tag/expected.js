"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    module_bar = require("./bar"),
    bar = module_bar.default || module_bar,
    foo = module_bar.f;

require("./foo");

function render(input, out) {
  var data = input;
}

marko_template._ = render;

marko_template.meta = {};
