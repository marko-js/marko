var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(data, out) {
  test_hello_tag({
      name: "Frank"
    }, out);

  test_hello_tag({
      name: "Frank"
    }, out);

  test_hello_tag({
      name: "Frank"
    }, out);
}

marko_template._ = render;
