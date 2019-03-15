"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/include/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    IncludeTarget = require("./include-target.marko"),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, IncludeTarget, {
      foo: "bar"
    }, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
