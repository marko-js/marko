"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/no-update/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

require("marko/src/runtime/vdom/preserve-attrs");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<input" +
    marko_attr("value", input.defaultValue) +
    marko_attr("data-marko", {
      noupdate: [
        "value"
      ]
    }, false) +
    ">");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/no-update/template.marko"
  };
