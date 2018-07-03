"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/svg-dynamic-tag-name/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_attrs0 = {
        width: "140",
        height: "30"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var isCircle = true;

  out.be("svg", marko_attrs0, "0", component, null, 1);

  marko_dynamicTag(isCircle ? "circle" : "square", {
      width: 200,
      height: 200
    }, out, __component, "1");

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
