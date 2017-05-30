"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadNestedTag = require("marko/src/runtime/helper-loadNestedTag"),
    hello_foo_nested_tag = marko_loadNestedTag("foo"),
    marko_mergeNestedTagsHelper = require("marko/src/runtime/helper-mergeNestedTags"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    hello_template = marko_loadTemplate(require.resolve("./components/hello")),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template);

function render(input, out) {
  var data = input;

  hello_tag(marko_mergeNestedTagsHelper({
      renderBody: function renderBody(out, hello0) {
        marko_forEach(input.colors, function(color) {
          hello_foo_nested_tag({
              renderBody: function renderBody(out) {
                out.w("Foo!");
              }
            }, hello0);
        });
      },
      [hasRenderBodyKey]: true
    }), out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/hello"
    ]
  };
