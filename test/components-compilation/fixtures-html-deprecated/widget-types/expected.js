"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_rendererLegacy = require("marko/src/runtime/components/legacy/renderer-legacy"),
    marko_componentTypes = {
        "default": "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/widget-types/component",
        mobile: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/widget-types/component-mobile"
      },
    marko_dataMarko = require("marko/src/runtime/html/helpers/data-marko");

function render(input, out, __component, widget, component) {
  var data = input;

  __component.t(marko_componentTypes[data.isMobile ? "default" : "mobile"]);

  out.w("<div" +
    marko_dataMarko(null, "@_wbind", __component) +
    "></div>");
}

marko_template._ = marko_rendererLegacy(render, {});

marko_template.meta = {
    legacy: true
  };
