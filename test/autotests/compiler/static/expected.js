var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  out.w("Hello John");
}

marko_template._ = render;
