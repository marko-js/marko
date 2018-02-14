"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/component-template-entry-split/component-browser",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_renderer(render, {
    ___split: true,
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/component-template-entry-split/component-browser",
    component: "./component-browser",
    deps: [
      "marko/src/components"
    ]
  };
