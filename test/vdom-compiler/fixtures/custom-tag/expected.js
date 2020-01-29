"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/custom-tag/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer")),
    marko_createElement = require("marko/src/runtime/vdom/helpers/v-element"),
    marko_const = require("marko/src/runtime/vdom/helpers/const"),
    marko_const_nextId = marko_const("cee604"),
    marko_node0 = marko_createElement("a", {
        href: "foo"
      }, null, null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Body content");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("div");

  test_hello_tag({
      name: "World",
      renderBody: function(out) {
        out.n(marko_node0, component);
      }
    }, out);

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
