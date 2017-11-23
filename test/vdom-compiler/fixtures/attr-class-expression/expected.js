"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_classList = marko_helpers.cl,
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/attr-class-expression/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", {
      "class": marko_classAttr(marko_classList([
        "foo",
        {
            bar: true,
            baz: false
          }
      ]))
    }, null, null, 3, 4)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
