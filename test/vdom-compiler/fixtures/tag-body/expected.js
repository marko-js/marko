"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/tag-body/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_hello_tag({
      name: "World",
      renderBody: function(out) {
        out.t("Body content");
      }
    }, out);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
