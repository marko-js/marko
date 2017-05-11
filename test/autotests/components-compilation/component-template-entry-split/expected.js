"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/component-template-entry-split/component-browser", function() {
      return require("./component-browser");
    }),
    marko_component = require("./component"),
    marko_renderer = components_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    split: true,
    type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./component-browser"
        },
      {
          type: "require",
          path: "marko/src/components"
        }
    ]
  };
