"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/svg-dynamic-tag-name/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_attrs0 = {
        width: "140",
        height: "30"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var isCircle = true;

  out.be("svg", marko_attrs0, "0", component);

  marko_dynamicTag(out, isCircle ? "circle" : "square", function() {
    return {
        width: 200,
        height: 200
      };
  }, null, null, null, __component, "1");

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
