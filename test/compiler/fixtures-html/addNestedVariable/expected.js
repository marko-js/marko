"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/addNestedVariable/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    test_addNestedVariable_tag = marko_loadTag(require("./tags/test-addNestedVariable/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_addNestedVariable_tag({
      renderBody: function renderBody(out, foo) {
        out.w("Hello " +
          marko_escapeXml(foo) +
          "!");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/addNestedVariable/template.marko",
    tags: [
      "./tags/test-addNestedVariable/renderer"
    ]
  };
