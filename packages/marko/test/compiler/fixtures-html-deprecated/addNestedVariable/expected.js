"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/addNestedVariable/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_addNestedVariable_tag = marko_loadTag(require("./tags/test-addNestedVariable/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_addNestedVariable_tag({
      renderBody: function(out, foo) {
        out.w("Hello " +
          marko_escapeXml(foo) +
          "!");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/addNestedVariable/template.marko",
    tags: [
      "./tags/test-addNestedVariable/renderer"
    ]
  };
