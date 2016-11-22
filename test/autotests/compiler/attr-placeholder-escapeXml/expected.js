var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(data, out) {
  out.w("<div foo=\"Hello " +
    marko_escapeXmlAttr(data.name) +
    "\"></div>");

  var foo = "Hello " + data.name;
}

template._ = render;
