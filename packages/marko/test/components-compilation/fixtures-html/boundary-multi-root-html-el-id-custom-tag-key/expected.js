"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-multi-root-html-el-id-custom-tag-key/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    my_component_template = marko_loadTemplate(require.resolve("./components/my-component")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    my_component_tag = marko_loadTag(my_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1 id=\"myStart\"></h1>");

  my_component_tag({}, out, __component, "myEnd");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-multi-root-html-el-id-custom-tag-key/index.marko",
    component: "./",
    tags: [
      "./components/my-component"
    ]
  };
