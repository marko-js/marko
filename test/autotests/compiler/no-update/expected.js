"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

require("marko/src/runtime/vdom/preserve-attrs");

function render(input, out) {
  var data = input;

  out.w("<input" +
    marko_attr("value", input.defaultValue) +
    marko_attr("data-marko", {
      noupdate: [
        "value"
      ]
    }, false) +
    ">");
}

marko_template._ = render;

marko_template.meta = {};
