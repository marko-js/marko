"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    hello_template = marko_loadTemplate(require.resolve("./components/hello")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template);

function render(input, out) {
  var data = input;

  hello_tag({
      foo: {
          renderBody: function renderBody(out) {
            out.w("Foo!");
          }
        },
      [hasRenderBodyKey]: true
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/hello"
    ]
  };
