var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  out.w("<div replaced=\"test-replaceWith\"></div>");
}

marko_template._ = render;
