var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    hello_template = marko_loadTemplate(require.resolve("./hello.marko")),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template);

function render(data, out) {
  hello_tag({
      name: "Frank"
    }, out);
}

marko_template._ = render;
