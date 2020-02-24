"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tag-if-optimization/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    test_template = marko_loadTemplate(require.resolve("./components/test")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_tag = marko_loadTag(test_template);

function render(input, out, __component, component, state) {
  var data = input;

  test_tag({
      nested: true && {
          renderBody: function(out) {
            out.w("Hello");
          }
        }
    }, out, __component, "0");

  test_tag({
      nested: true && {
          renderBody: function(out) {
            out.w("Hello");
          }
        }
    }, out, __component, "2");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/nested-tag-if-optimization/template.marko",
    tags: [
      "./components/test"
    ]
  };
