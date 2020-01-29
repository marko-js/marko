"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_forIn = require("marko/src/runtime/helpers/for-in");

function render(input, out) {
  var data = input;

  marko_forIn(myObject, function(k, v) {
    console.log("k:", k, "v:", v);
  });
}

marko_template._ = render;

marko_template.meta = {};
