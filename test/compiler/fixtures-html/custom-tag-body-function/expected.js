"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/custom-tag-body-function/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_body_function_tag = marko_loadTag(require("./tags/test-body-function/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_body_function_tag({
      name: "World",
      myBody: function myBody(foo, bar) {
        out.w("This is the body content");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/custom-tag-body-function/template.marko",
    tags: [
      "./tags/test-body-function/renderer"
    ]
  };
