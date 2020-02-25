"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-el-no-output-tag/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    test_no_output_tag = marko_loadTag(require("./components/test-no-output/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");

  test_no_output_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-el-no-output-tag/index.marko",
    component: "./",
    tags: [
      "./components/test-no-output/renderer"
    ]
  };
