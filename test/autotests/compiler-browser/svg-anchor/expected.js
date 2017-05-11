"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("5e5668"),
    marko_node0 = marko_createElement("svg", {
        width: "140",
        height: "30"
      }, 1, 1, {
        c: marko_const_nextId()
      })
      .e("a", {
          "xlink:href": "https://developer.mozilla.org/en-US/docs/SVG",
          target: "_blank"
        }, 0, 1);

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;
