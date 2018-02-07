"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-template-entry/component",
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r;

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___split: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-template-entry/component",
    component: "./component",
    deps: [
      "marko/src/components"
    ]
  };
