"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/simple/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("Hello " +
    marko_escapeXml(input.name) +
    "! ");

  if (input.colors.length) {
    out.w("<ul>");

    var $for$0 = 0;

    marko_forOf(input.colors, function(color) {
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

    marko_forOf(input.colors, function(color) {
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

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/simple/template.marko"
  };
