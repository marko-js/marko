"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("a51026"),
    marko_node0 = marko_createElement("DIV", null, 0, 0, {
        c: marko_const_nextId()
      });

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;
