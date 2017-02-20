var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = require("./renderer"),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rw,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/component-template-entry-split/component", function() {
      return require("./component");
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", component.id) +
    "></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./component"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ]
  };
