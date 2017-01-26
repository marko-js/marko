var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  out.w("<style>.foo{}</style><div></div>");
}

marko_template._ = render;
