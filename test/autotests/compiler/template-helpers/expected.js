var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;


var name = '${name}<div if(foo)></div>';

function render(data, out) {
  out.w("Hello " +
    marko_escapeXml(name) +
    "!");
}

marko_template._ = render;
