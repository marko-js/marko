"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/invoke/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_getWidgetFromOut = require("marko/src/runtime/components/legacy/helper-getWidgetFromOut"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  var widget = marko_getWidgetFromOut(out),
      __component = widget,
      component = __component._c;

  marko_dynamicTag(out, input, function() {
    return {
        x: 1
      };
  }, null, null, null, __component, "hi");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/invoke/template.marko"
  };
