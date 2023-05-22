"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_registry = require("marko/src/runtime/components/registry"),
    marko_registerComponent = components_registry.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-multi-root-html-el-id-custom-tag-key/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    my_component_template = marko_loadTemplate(require.resolve("./components/my-component")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    my_component_tag = marko_loadTag(my_component_template),
    marko_createElement = require("marko/src/runtime/vdom/helpers/v-element"),
    marko_const = require("marko/src/runtime/vdom/helpers/const"),
    marko_const_nextId = marko_const("0a6612"),
    marko_node0 = marko_createElement("h1", {
        id: "myStart"
      }, "0", null, 0, 0, {
        i: marko_const_nextId()
      });

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);

  my_component_tag({}, out, __component, "myEnd");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-multi-root-html-el-id-custom-tag-key/index.marko",
    component: "./",
    tags: [
      "./components/my-component"
    ]
  };
