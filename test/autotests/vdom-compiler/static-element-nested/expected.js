"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("6d8f0e"),
    marko_node0 = marko_createElement("DIV", {
        "class": "hello",
        onclick: "onClick()"
      }, null, null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Welcome!");

function render(input, out) {
  var data = input;

  out.e("SPAN", null, null, null, 2)
    .e("H1", null, null, null, 3)
      .t("Hello ")
      .t(input.name)
      .t("!")
    .n(marko_node0);
}

marko_template._ = render;
