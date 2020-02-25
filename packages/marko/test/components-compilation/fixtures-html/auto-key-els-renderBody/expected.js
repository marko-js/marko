"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els-renderBody/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    another_component_template = marko_loadTemplate(require.resolve("./components/another-component")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    another_component_tag = marko_loadTag(another_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span>A</span>");

  another_component_tag({
      renderBody: function(out) {
        out.w("<div><span>This is <b>static</b></span></div>");
      }
    }, out, __component, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els-renderBody/index.marko",
    component: "./",
    tags: [
      "./components/another-component"
    ]
  };
