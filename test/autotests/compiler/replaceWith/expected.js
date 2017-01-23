var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  out.w("<div replaced=\"test-replaceWith\"></div>");
}

marko_template._ = render;
