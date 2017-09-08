"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/auto-key-els-renderBody/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr"),
    marko_renderComponent = require("marko/src/components/taglib/helpers/renderComponent"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    another_component_template = marko_loadTemplate(require.resolve("./components/another-component")),
    marko_loadTag = marko_helpers.t,
    another_component_tag = marko_loadTag(another_component_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span" +
    marko_attr("data-marko-key", marko_keyAttr("spanA", __component)) +
    ">A</span>");

  marko_renderComponent(another_component_tag, {
      renderBody: function renderBody(out) {
        out.w("<div><span>This is <b>static</b></span></div>");
      }
    }, out, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "./components/another-component"
    ]
  };
