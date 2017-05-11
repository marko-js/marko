"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  if (true) {
    console.log("hello");
  }
}

marko_template._ = render;

marko_template.meta = {};
