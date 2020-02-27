"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_classValue = require("marko/src/runtime/helpers/class-value"),
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/attr-class-expression/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("div", {
      "class": marko_classValue(marko_classValue([
        "foo",
        {
            bar: true,
            baz: false
          }
      ]))
    }, null, null, 3, 1)
    .t("Hello ")
    .t(name, component)
    .t("!");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
