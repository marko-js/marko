"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/static-element-nested/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
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

function render(input, out, __component, component, state) {
  var data = input;

  out.e("SPAN", null, null, null, 2)
    .e("H1", null, null, null, 3)
      .t("Hello ")
      .t(input.name)
      .t("!")
    .n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
