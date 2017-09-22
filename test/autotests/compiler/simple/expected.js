"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler/simple/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(input.name) +
    "! ");

  if (input.colors.length) {
    out.w("<ul>");

    marko_forEach(input.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }

  if (input.colors.length) {
    out.w("<ul>");

    marko_forEach(input.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
