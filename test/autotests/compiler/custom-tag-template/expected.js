var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    hello_template = marko_loadTemplate(require.resolve("./hello.marko"));

function render(data, out) {
  hello_template.render({
      name: "Frank"
    }, out);
}

template._ = render;
