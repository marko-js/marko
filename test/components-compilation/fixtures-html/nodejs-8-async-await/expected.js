"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
    test: async function () {
        await Promise.resolve();
    }
},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/nodejs-8-async-await/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/nodejs-8-async-await/index.marko",
    component: "./"
  };
