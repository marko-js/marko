"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {}
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/key/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    app_foo_template = marko_loadTemplate(require.resolve("./components/app-foo")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    app_foo_tag = marko_loadTag(app_foo_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=root>");

  app_foo_tag({}, out, __component, "foo");

  out.w("<a href=ebay.com>eBay</a></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/key/index.marko",
    component: "./",
    tags: [
      "./components/app-foo"
    ]
  };
