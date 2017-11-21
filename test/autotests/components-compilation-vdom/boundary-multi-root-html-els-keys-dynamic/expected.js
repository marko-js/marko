"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-vdom/boundary-multi-root-html-els-keys-dynamic/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("H1", {
      "data-marko-key": marko_keyAttr(input.myStartKey, __component)
    }, input.myStartKey, component, 0);

  out.e("DIV", {
      "data-marko-key": marko_keyAttr(input.myEndKey, __component)
    }, input.myEndKey, component, 0);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/autotests/components-compilation-vdom/boundary-multi-root-html-els-keys-dynamic/index.marko",
    component: "./"
  };
