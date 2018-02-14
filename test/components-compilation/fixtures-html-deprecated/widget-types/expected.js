"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    marko_componentTypes = {
        "default": "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/widget-types/component",
        mobile: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/widget-types/component-mobile"
      };

function render(input, out, __component, widget, component) {
  var data = input;

  __component.t(marko_componentTypes[data.isMobile ? "default" : "mobile"]);

  out.w("<div></div>");
}

marko_template._ = marko_rendererLegacy(render, {});

marko_template.meta = {
    legacy: true
  };
