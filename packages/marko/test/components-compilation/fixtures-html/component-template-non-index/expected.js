"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/component-template-non-index/template.marko",
    marko_interopRequireDefault = require("marko/src/runtime/helpers/interop-require"),
    marko_component = marko_interopRequireDefault(require("./template.component")),
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./template.style.css"
    ],
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/component-template-non-index/template.marko",
    component: "./template.marko"
  };
