var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    hello_template = marko_loadTemplate(require.resolve("./hello.marko")),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template);

function render(data, out) {
  hello_tag({
      name: "Frank"
    }, out);
}

template._ = render;
