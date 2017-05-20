"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca,
    marko_str = marko_helpers.s,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out) {
  var data = input;

  out.w("<div" +
    marko_classAttr(input.className) +
    " class2=\"" +
    marko_str(input.className) +
    "\" foo=\"a" +
    marko_escapeXmlAttr(input.foo) +
    "b\" bar=\"a " +
    marko_escapeXmlAttr(input.foo) +
    " b\" baz=\"a " +
    marko_str(input.foo) +
    " b\" nested=\"a " +
    marko_str(input.foo + ("nested " + input.bar)) +
    " b\"></div>");
}

marko_template._ = render;

marko_template.meta = {};
