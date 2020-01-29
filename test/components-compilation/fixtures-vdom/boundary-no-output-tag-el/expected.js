"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-no-output-tag-el/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_no_output_tag = marko_loadTag(require("./components/test-no-output/renderer")),
    marko_createElement = require("marko/src/runtime/vdom/helpers/v-element"),
    marko_const = require("marko/src/runtime/vdom/helpers/const"),
    marko_const_nextId = marko_const("de2191"),
    marko_node0 = marko_createElement("div", null, "0", null, 0, 0, {
        i: marko_const_nextId()
      });

function render(input, out, __component, component, state) {
  var data = input;

  test_no_output_tag({}, out);

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-no-output-tag-el/index.marko",
    component: "./",
    tags: [
      "./components/test-no-output/renderer"
    ]
  };
