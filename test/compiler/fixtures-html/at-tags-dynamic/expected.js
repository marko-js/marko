"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/at-tags-dynamic/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
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

function render(input, out, __component, component, state) {
  var data = input;

  hello_tag(marko_mergeNestedTagsHelper({
      renderBody: function renderBody(out, hello0) {
        var for__1 = 0;

        marko_forEach(input.colors, function(color) {
          var keyscope__2 = "[" + ((for__1++) + "]");

          hello_foo_nested_tag({
              renderBody: function renderBody(out) {
                out.w("Foo!");
              }
            }, hello0);
        });
      },
      [hasRenderBodyKey]: true
    }), out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/at-tags-dynamic/template.marko",
    tags: [
      "./components/hello"
    ]
  };
