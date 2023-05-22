"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry = require("marko/src/runtime/components/registry"),
    marko_registerComponent = components_registry.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/no-escape/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent");

function render(input, out, __component, component, state) {
  var data = input;

  out.t("Hello ");

  out.t(name, component);

  out.t("! ");

  out.h(message, component);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
