"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_attrs0 = {
        width: "140",
        height: "30"
      },
    marko_attrs1 = {
        width: "200",
        height: "200"
      };

function render(input, out) {
  var data = input;

  var isCircle = true;

  out.e("svg", marko_attrs0, 1, 1)
    .e(isCircle ? "circle" : "square", marko_attrs1, 0, 1);
}

marko_template._ = render;
