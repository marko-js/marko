"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    test_addNestedVariable_tag = marko_loadTag(require("./tags/test-addNestedVariable/renderer"));

function render(input, out) {
  var data = input;

  test_addNestedVariable_tag({
      renderBody: function renderBody(out, foo) {
        out.w("Hello " +
          marko_escapeXml(foo) +
          "!");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./tags/test-addNestedVariable/renderer"
    ]
  };
