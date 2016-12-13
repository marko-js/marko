var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {
    deps: [
        {
            type: "css",
            code: ".foo{}",
            virtualPath: "./index.marko.css"
          }
      ]
  };
