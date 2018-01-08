"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler-browser/fixtures/svg-dynamic-tag-name/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        width: "140",
        height: "30"
      },
    marko_attrs1 = {
        width: "200",
        height: "200"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var isCircle = true;

  out.e("svg", marko_attrs0, "0", component, 1, 1)
    .e(isCircle ? "circle" : "square", marko_attrs1, "1", component, 0, 1);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
