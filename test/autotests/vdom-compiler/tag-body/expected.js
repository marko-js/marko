"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(input, out) {
  var data = input;

  test_hello_tag({
      name: "World",
      renderBody: function renderBody(out) {
        out.t("Body content");
      }
    }, out);
}

marko_template._ = render;
