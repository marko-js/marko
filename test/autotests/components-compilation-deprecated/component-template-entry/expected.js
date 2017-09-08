"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-template-entry/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_defineWidget_legacy = legacy_helpers.w,
    marko_componentType2 = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-template-entry/component", function() {
      return marko_defineWidget_legacy(require("./component"));
    }),
    marko_rendererLegacy = legacy_helpers.r;

function render(input, out, __component, component, state, __component, widget, component) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    split: true,
    type: marko_componentType2
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        },
      {
          type: "require",
          path: "./component"
        },
      {
          type: "require",
          path: "marko/src/components"
        }
    ]
  };
