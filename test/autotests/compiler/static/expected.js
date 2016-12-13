var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  out.w("Hello John");
}

marko_template._ = render;
