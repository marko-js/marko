"use strict";

var marko_template = module.exports = require("marko/src/vdom").t();

function render(input, out) {
  var data = input;

  var attrs = {
          foo: "bar",
          hello: "world"
        };

  out.e("DIV", attrs, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
