var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  out.w("Hello John");
}

template._ = render;
