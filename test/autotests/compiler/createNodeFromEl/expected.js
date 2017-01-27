var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

function render(input, out) {
  var data = input;

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
