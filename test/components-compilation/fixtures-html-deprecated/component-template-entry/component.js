var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = require("./component"),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rw,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-template-entry/index.marko", function () {
  return module.exports;
}),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, component, state) {
  out.w("<div" + marko_attr("id", component.id) + "></div>");
}

marko_template._ = marko_components.r(render, {
  type: marko_componentType
}, marko_component);

marko_template.Component = marko_components.w(marko_component, marko_template._);