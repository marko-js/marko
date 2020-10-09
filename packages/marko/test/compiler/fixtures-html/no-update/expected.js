"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/no-update/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_dataMarko = require("marko/src/runtime/html/helpers/data-marko"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

require("marko/src/runtime/vdom/preserve-attrs");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<input" +
    marko_dataMarko(out, __component, {
      pa: [
        "value"
      ]
    }) +
    marko_attr("value", input.defaultValue) +
    ">");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/no-update/template.marko"
  };
