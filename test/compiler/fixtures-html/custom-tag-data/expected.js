"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/custom-tag-data/template.marko",
    components_helpers = require("marko/src/components/helpers"),
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
    id: "/marko-test$1.0.0/compiler/fixtures-html/custom-tag-data/template.marko",
    tags: [
      "./custom-tag-data-tag"
    ]
  };
