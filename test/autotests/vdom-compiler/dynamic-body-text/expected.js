"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_attrs0 = {
        "class": "foo"
      };

function render(input, out) {
  var data = input;

  out.e("DIV", marko_attrs0, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
