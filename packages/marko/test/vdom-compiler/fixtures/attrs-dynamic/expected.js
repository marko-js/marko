"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry = require("marko/src/runtime/components/registry"),
    marko_registerComponent = components_registry.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/attrs-dynamic/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_attrs = require("marko/src/runtime/vdom/helpers/attrs");

function render(input, out, __component, component, state) {
  var data = input;

  var attrs = {
    foo: "bar",
    hello: "world"
};

  out.e("div", marko_attrs(attrs), null, null, 3, 4)
    .t("Hello ")
    .t(name, component)
    .t("!");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
