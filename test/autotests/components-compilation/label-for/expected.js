"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/label-for/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var marko_for_key0 = "submitButton";

  out.w("<label" +
    marko_attr("for", __component.elId(marko_for_key0)) +
    marko_attr("data-marko-key", marko_keyAttr(marko_for_key0, __component)) +
    ">Submit</label>");

  var marko_id_key1 = "submitButton";

  out.w("<button" +
    marko_attr("id", __component.elId(marko_id_key1)) +
    marko_attr("data-marko-key", marko_keyAttr(marko_id_key1, __component)) +
    ">Submit</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./template.marko"
        }
    ]
  };
