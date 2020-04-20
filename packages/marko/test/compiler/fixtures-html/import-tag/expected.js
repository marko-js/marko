"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/import-tag/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_bar = require("./bar"),
    bar = module_bar.default || module_bar,
    foo = module_bar.f,
    module_testHello = require("./tags/test-hello/renderer"),
    testHello = module_testHello.default || module_testHello;

require("./foo");

function render(input, out, __component, component, state) {
  var data = input;
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/import-tag/template.marko"
  };
