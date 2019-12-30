"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/auto-key-els/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    Foo = marko_loadTemplate(require.resolve("./foo.marko")),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    _preserve_tag = marko_loadTag(require("marko/src/core-tags/components/preserve-tag")),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><span>A</span><ul>");

  var $for$0 = 0;

  marko_forOf(colors, function(color) {
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
      preserveKey: $key$0,
      renderBody: function(out) {
        out.w(marko_escapeXml(Date.now()));
      }
    }, out, __component, $key$0);

  out.w("</p></div><span>B</span>");

  marko_dynamicTag(out, Foo, null, null, null, null, __component, "4");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/auto-key-els/index.marko",
    component: "./",
    tags: [
      "./foo.marko",
      "marko/src/core-tags/components/preserve-tag"
    ]
  };
