"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("9e11e1"),
    marko_node0 = marko_createElement("DIV", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("No colors!");

function render(input, out) {
  var data = input;

  out.e("H1", null, 3)
    .t("Hello ")
    .t(input.name)
    .t("!");

  if (input.colors.length) {
    out.be("UL");

    marko_forEach(input.colors, function(color) {
      out.e("LI", null, 1)
        .t(color);
    });

    out.ee();
  } else {
    out.n(marko_node0);
  }
}

marko_template._ = render;
