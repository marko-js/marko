"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/nested-tag-shorthand-simple-conditional/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    test_message_template = marko_loadTemplate(require.resolve("./components/test-message/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_message_tag = marko_loadTag(test_message_template);

function render(input, out, __component, component, state) {
  var data = input;

  test_message_tag({
      body: someCondition && {
          renderBody: function renderBody(out) {
            out.w("My body");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/nested-tag-shorthand-simple-conditional/template.marko",
    tags: [
      "./components/test-message/template.marko"
    ]
  };
