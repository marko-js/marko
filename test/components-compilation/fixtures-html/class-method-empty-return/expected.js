"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        test: function(e) {
          return;
        }
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/class-method-empty-return/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"test\"></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/class-method-empty-return/index.marko",
    component: "./"
  };
