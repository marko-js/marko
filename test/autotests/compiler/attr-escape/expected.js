var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca,
    marko_str = marko_helpers.s,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(data, out) {
  out.w("<div" +
    marko_classAttr(data.className) +
    " class2=\"" +
    marko_str(data.className) +
    "\" foo=\"a" +
    marko_escapeXmlAttr(data.foo) +
    "b\" bar=\"a " +
    marko_escapeXmlAttr(data.foo) +
    " b\" baz=\"a " +
    marko_str(data.foo) +
    " b\" nested=\"a " +
    marko_str(data.foo + ("nested " + data.bar)) +
    " b\"></div>");
}

marko_template._ = render;
