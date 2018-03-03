"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    marko_component = require("./"),
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div><h1>Header</h1><div>");

  include_tag({
      _target: __component.b
    }, out, __component, "3");

  out.w("</div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/component-include-attr/index",
    component: "./",
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
