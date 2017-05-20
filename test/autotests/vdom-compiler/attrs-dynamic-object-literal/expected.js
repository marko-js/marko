"use strict";

var marko_template = module.exports = require("marko/src/vdom").t();

function render(input, out) {
  var data = input;

  out.e("DIV", {
      foo: "bar",
      hello: "world"
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
