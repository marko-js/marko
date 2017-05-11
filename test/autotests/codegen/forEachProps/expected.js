"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty");

function render(input, out) {
  var data = input;

  marko_forEachProp(myObject, function(k, v) {
    console.log("k:", k, "v:", v);
  });
}

marko_template._ = render;

marko_template.meta = {};
