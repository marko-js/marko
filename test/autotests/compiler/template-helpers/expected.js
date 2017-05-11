"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;


var name = '${name}<div if(foo)></div>';

function render(input, out) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(name) +
    "!");
}

marko_template._ = render;

marko_template.meta = {};
