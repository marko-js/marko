"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_classList = marko_helpers.cl,
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  out.e("DIV", {
      "class": marko_classAttr(marko_classList([
        "foo",
        {
            bar: true,
            baz: false
          }
      ]))
    }, 3, 4)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
