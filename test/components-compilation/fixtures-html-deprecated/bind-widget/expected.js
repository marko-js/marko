"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-widget/widget",
    marko_rendererLegacy = require("marko/src/runtime/components/legacy/renderer-legacy"),
    marko_keyAttr = require("marko/src/core-tags/components/helpers/markoKeyAttr"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div data-widget=\"/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-widget/widget\"" +
    marko_attr("id", __component.elId()) +
    marko_attr("data-marko-key", marko_keyAttr("@_wbind", __component)) +
    "></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___split: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-widget/widget",
    component: "./widget",
    deps: [
      "marko/src/runtime/components"
    ]
  };
