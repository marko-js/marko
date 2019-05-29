"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    Foo = marko_loadTemplate(require.resolve("./foo.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    _preserve_tag = marko_loadTag(require("marko/src/core-tags/components/preserve-tag")),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span>A</span><ul>");

  var $for$0 = 0;

  marko_forEach(colors, function(color) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li>" +
      marko_escapeXml(color) +
      "</li>");
  });

  out.w("</ul>");

  var $key$0 = __component.___nextKey("@preservedP");

  out.w("<p>");

  _preserve_tag({
      bodyOnly: true,
      key: $key$0,
      renderBody: function renderBody(out) {
        out.w(marko_escapeXml(Date.now()));
      }
    }, out);

  out.w("</p></div><span>B</span>");

  marko_dynamicTag(out, Foo, {}, null, null, __component, "4");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els/index.marko",
    component: "./",
    tags: [
      "./foo.marko",
      "marko/src/core-tags/components/preserve-tag"
    ]
  };
