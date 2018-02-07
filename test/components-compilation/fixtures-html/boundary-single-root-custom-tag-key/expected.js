"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-single-root-custom-tag-key/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    my_component_template = marko_loadTemplate(require.resolve("./components/my-component")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    my_component_tag = marko_loadTag(my_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  my_component_tag({}, out, __component, "myComponent");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-single-root-custom-tag-key/index.marko",
    component: "./",
    tags: [
      "./components/my-component"
    ]
  };
