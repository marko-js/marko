"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/at-tags-dynamic/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadNestedTag = require("marko/src/runtime/helpers/load-nested-tag"),
    hello_foo_nested_tag = marko_loadNestedTag("foo"),
    marko_mergeNestedTagsHelper = require("marko/src/runtime/helpers/merge-nested-tags"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    hello_template = marko_loadTemplate(require.resolve("./components/hello")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    hello_tag = marko_loadTag(hello_template);

function render(input, out, __component, component, state) {
  var data = input;

  hello_tag(marko_mergeNestedTagsHelper({
      renderBody: function(out, $nestedTaghello$0) {
        var $for$0 = 0;

        marko_forOf(input.colors, function(color) {
          var $keyScope$0 = "[" + (($for$0++) + "]");

          hello_foo_nested_tag({
              renderBody: function(out) {
                out.w("Foo!");
              }
            }, $nestedTaghello$0);
        });
      }
    }), out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/at-tags-dynamic/template.marko",
    tags: [
      "./components/hello"
    ]
  };
