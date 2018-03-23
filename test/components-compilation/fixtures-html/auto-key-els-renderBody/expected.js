"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els-renderBody/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    another_component_template = marko_loadTemplate(require.resolve("./components/another-component")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    another_component_tag = marko_loadTag(another_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span>A</span>");

  another_component_tag({
      renderBody: function renderBody(out) {
        out.w("<div><span>This is <b>static</b></span></div>");
      }
    }, out, __component, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els-renderBody/index.marko",
    component: "./",
    tags: [
      "./components/another-component"
    ]
  };
