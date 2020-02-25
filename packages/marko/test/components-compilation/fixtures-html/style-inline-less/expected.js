"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/style-inline-less/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "less",
          code: ".foo {\n        background-color: 'red';\n    }",
          virtualPath: "./index.marko.less",
          path: "./index.marko"
        }
    ],
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/style-inline-less/index.marko"
  };
