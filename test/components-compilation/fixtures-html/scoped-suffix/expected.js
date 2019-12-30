"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {}
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/scoped-suffix/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"root\"><label" +
    marko_attr("for", __component.elId("name")) +
    ">Name</label><input" +
    marko_attr("id", __component.elId("name")) +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/scoped-suffix/index.marko",
    component: "./"
  };
