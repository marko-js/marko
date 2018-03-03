"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/auto-key-els/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    foo_template = marko_loadTemplate(require.resolve("./foo.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    _preserve_tag = marko_loadTag(require("marko/src/components/taglib/preserve-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span>A</span><ul>");

  marko_forEach(colors, function(color) {
    out.w("<li>" +
      marko_escapeXml(color) +
      "</li>");
  });

  out.w("</ul>");

  var __key3 = __component.___nextKey("preservedP");

  out.w("<p>");

  _preserve_tag({
      bodyOnly: true,
      key: __key3,
      renderBody: function renderBody(out) {
        out.w(marko_escapeXml(Date.now()));
      }
    }, out);

  out.w("</p></div><span>B</span>");

  include_tag({
      _target: foo_template
    }, out, __component, "5");
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
      "marko/src/components/taglib/preserve-tag",
      "marko/src/taglibs/core/include-tag"
    ]
  };
