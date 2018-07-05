"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {}
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/key/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_foo_template = marko_loadTemplate(require.resolve("./components/app-foo")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_foo_tag = marko_loadTag(app_foo_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"root\">");

  app_foo_tag({}, out, __component, "foo");

  out.w("<a href=\"ebay.com\">eBay</a></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/key/index.marko",
    component: "./",
    tags: [
      "./components/app-foo"
    ]
  };
