"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {
        onMount: function() {}
      },
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/key/index.marko", function() {
      return module.exports;
    }),
    marko_renderComponent = require("marko/components/taglib/helpers/renderComponent"),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    app_foo_template = marko_loadTemplate(require.resolve("./components/app-foo")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_foo_tag = marko_loadTag(app_foo_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"root\"" +
    marko_attr("id", __component.id) +
    ">");

  marko_renderComponent(app_foo_tag, {}, out, [
    __component,
    "foo"
  ]);

  out.w("<a href=\"ebay.com\"" +
    marko_attr("id", __component.elId("link")) +
    ">eBay</a></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "./components/app-foo"
    ]
  };
