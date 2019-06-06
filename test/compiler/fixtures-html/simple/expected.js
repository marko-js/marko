"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/simple/template.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
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

    var $for$0 = 0;

    marko_forEach(input.colors, function(color) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

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

    var $for$1 = 0;

    marko_forEach(input.colors, function(color) {
      var $keyScope$1 = "[" + (($for$1++) + "]");

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

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/simple/template.marko"
  };
