var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  out.w("<div></div>");
}

template._ = render;

template.meta = {
    deps: [
        "./style.css"
      ]
  };
