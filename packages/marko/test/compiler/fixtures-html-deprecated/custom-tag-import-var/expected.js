"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/custom-tag-import-var/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_import_var_tag = marko_loadTag(require("./tags/test-import-var/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_import_var_tag({
      name: "World",
      foo: input.foo,
      bar: input.bar,
      renderBody: function(out) {
        out.w("This is the body content");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/custom-tag-import-var/template.marko",
    tags: [
      "./tags/test-import-var/renderer"
    ]
  };
