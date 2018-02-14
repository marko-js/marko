var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {
    deps: [
      {
          type: "less",
          code: ".foo {\n        background-color: 'red';\n    }",
          virtualPath: "./index.marko.less",
          path: "./index.marko"
        }
    ]
  };
