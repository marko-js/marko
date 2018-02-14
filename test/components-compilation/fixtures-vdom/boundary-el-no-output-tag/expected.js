"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-el-no-output-tag/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    test_no_output_tag = marko_loadTag(require("./components/test-no-output/renderer")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("4529ef"),
    marko_node0 = marko_createElement("DIV", null, "0", null, 0, 0, {
        i: marko_const_nextId()
      });

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);

  test_no_output_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-el-no-output-tag/index.marko",
    component: "./",
    tags: [
      "./components/test-no-output/renderer"
    ]
  };
