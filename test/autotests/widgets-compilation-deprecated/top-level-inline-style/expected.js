var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  out.w("<style>.foo{}</style><div></div>");
}

marko_template._ = render;
