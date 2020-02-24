"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {}
      },
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/class-tag-withspaces/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  var foo = new Foo()
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/class-tag-withspaces/template.marko",
    component: "./template.marko"
  };
