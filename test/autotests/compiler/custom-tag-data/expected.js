"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler/custom-tag-data/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    custom_tag_data_tag = marko_loadTag(require("./custom-tag-data-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  custom_tag_data_tag({
      name: "Frank",
      age: 32
    }, out, __component, "0");

  custom_tag_data_tag({
      name: "Frank".toUpperCase(),
      age: 32
    }, out, __component, "1");

  custom_tag_data_tag({
      name: "Frank",
      age: 10
    }, out, __component, "2");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "./custom-tag-data-tag"
    ]
  };
