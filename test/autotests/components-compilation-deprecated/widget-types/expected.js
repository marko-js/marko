var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components/legacy"),
    marko_registerComponent = marko_components.rw,
    marko_defineComponent = marko_components.w,
    marko_componentTypes = {
        "default": marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-types/component", function() {
          return marko_defineComponent(require("./component"));
        }),
        mobile: marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-types/component-mobile", function() {
          return marko_defineComponent(require("./component-mobile"));
        })
      },
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, component, state) {
  var data = input;

  component.t(marko_componentTypes[data.isMobile ? "default" : "mobile"]);

  out.w("<div" +
    marko_attr("id", component.id) +
    "></div>");
}

marko_template._ = marko_components.r(render, {});

marko_template.meta = {};
