"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("0524f9"),
    marko_node0 = marko_createElement("DIV", {
        "class": "hello",
        onclick: "onClick()"
      }, 1, 0, {
        c: marko_const_nextId()
      })
      .t("Hello World!");

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;
