"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/custom-tag/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("cee604"),
    marko_node0 = marko_createElement("A", {
        href: "foo"
      }, null, null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Body content");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV");

  test_hello_tag({
      name: "World",
      renderBody: function renderBody(out) {
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
