"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/createNodeFromEl/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_hello_tag({
      name: "Frank"
    }, out);

  test_hello_tag({
      name: "Frank"
    }, out);

  test_hello_tag({
      name: "Frank"
    }, out);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/createNodeFromEl/template.marko",
    tags: [
      "./tags/test-hello/renderer"
    ]
  };
