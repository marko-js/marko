"use strict";

var marko_template = module.exports = require("marko/src/vdom").t();

function render(input, out) {
  var data = input;

  out.t("Hello ");

  out.t(data.name);

  out.t("!");
}

marko_template._ = render;
