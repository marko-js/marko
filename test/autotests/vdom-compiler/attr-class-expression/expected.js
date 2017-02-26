"use strict";

var marko_template = module.exports = require("marko/vdom").t(),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_classList = marko_helpers.cl,
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  out.e("div", {
      "class": marko_classAttr(marko_classList([
        "foo",
        {
            bar: true,
            baz: false
          }
      ]))
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
