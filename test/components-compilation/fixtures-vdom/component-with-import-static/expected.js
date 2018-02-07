"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/components-compilation/fixtures-vdom/component-with-import-static/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_chai_module = require("chai"),
    chai_module = module_chai_module.default || module_chai_module,
    expect = module_chai_module.expect;

var counter = 0;

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", null, "0", component, 1)
    .t(counter++);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-vdom/component-with-import-static/index.marko",
    component: "./"
  };
