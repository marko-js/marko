"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(__filename),
    marko_component = {},
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-html-tag/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    marko_createElement = require("marko/src/runtime/vdom/helpers/v-element"),
    marko_const = require("marko/src/runtime/vdom/helpers/const"),
    marko_const_nextId = marko_const("5b1bc3"),
    marko_node0 = marko_createElement("head", null, "1", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("title", null, null, null, 1)
        .t("Hello"),
    marko_node1 = marko_createElement("h1", null, "4", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Hello");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("html", null, "0", component);

  out.n(marko_node0, component);

  out.be("body", null, "3", component);

  component_globals_tag({}, out);

  out.n(marko_node1, component);

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "5");

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-vdom/boundary-html-tag/index.marko",
    component: "./",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
