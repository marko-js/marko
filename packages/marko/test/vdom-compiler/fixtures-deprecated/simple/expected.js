"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry = require("marko/src/runtime/components/registry"),
    marko_registerComponent = components_registry.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures-deprecated/simple/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_createElement = require("marko/src/runtime/vdom/helpers/v-element"),
    marko_const = require("marko/src/runtime/vdom/helpers/const"),
    marko_const_nextId = marko_const("9e11e1"),
    marko_node0 = marko_createElement("div", null, null, null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("No colors!");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("h1", null, null, null, 3)
    .t("Hello ")
    .t(input.name, component)
    .t("!");

  if (input.colors.length) {
    out.be("ul");

    marko_forOf(input.colors, function(color) {
      out.e("li", null, null, null, 1)
        .t(color, component);
    });

    out.ee();
  } else {
    out.n(marko_node0, component);
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
