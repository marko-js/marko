var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(data, out) {
  out.w("<div foo=\"Hello " +
    marko_escapeXmlAttr(data.name) +
    "\"></div>");

  var foo = "Hello " + data.name;
}

marko_template._ = render;
