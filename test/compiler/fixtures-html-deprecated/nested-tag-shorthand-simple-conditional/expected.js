"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tag-shorthand-simple-conditional/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    test_message_template = marko_loadTemplate(require.resolve("./components/test-message/template.marko")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_message_tag = marko_loadTag(test_message_template);

function render(input, out, __component, component, state) {
  var data = input;

  test_message_tag({
      body: someCondition && {
          renderBody: function(out) {
            out.w("My body");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tag-shorthand-simple-conditional/template.marko",
    tags: [
      "./components/test-message/template.marko"
    ]
  };
