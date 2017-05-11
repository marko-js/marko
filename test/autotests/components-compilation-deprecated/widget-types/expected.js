"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_defineWidget_legacy = legacy_helpers.w,
    marko_componentTypes = {
        "default": marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/widget-types/component", function() {
          return marko_defineWidget_legacy(require("./component"));
        }),
        mobile: marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/widget-types/component-mobile", function() {
          return marko_defineWidget_legacy(require("./component-mobile"));
        })
      },
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget) {
  var data = input;

  __component.t(marko_componentTypes[data.isMobile ? "default" : "mobile"]);

  out.w("<div" +
    marko_attr("id", __component.id) +
    "></div>");
}

marko_template._ = marko_rendererLegacy(render, {});

marko_template.meta = {};
