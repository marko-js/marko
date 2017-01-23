var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {
    deps: [
      "./style.css",
      "./style.less",
      "./style.scss",
      "./style.styl"
    ]
  };
