"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/attr-escape/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeDoubleQuoteAttrValue = helpers_escape_xml.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_classAttr(input.className) +
    marko_attr("class2", input.className) +
    " foo=\"a" +
    marko_escapeDoubleQuoteAttrValue(input.foo) +
    "b\"" +
    marko_attr("bar", ("a " + input.foo) + " b") +
    marko_attr("baz", ("a " + input.foo) + " b") +
    marko_attr("nested", ("a " + (input.foo + ("nested " + input.bar))) + " b") +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/attr-escape/template.marko"
  };
