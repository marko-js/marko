var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;


var name = '${name}<div if(foo)></div>';

function render(data, out) {
  out.w("Hello " +
    marko_escapeXml(name) +
    "!");
}

template._ = render;
