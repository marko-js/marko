var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/component-template-non-index/template.marko", function() {
      return module.exports;
    }),
    marko_component = require("./template.component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./template.style.css",
      {
          type: "require",
          path: "./template.component"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ]
  };
