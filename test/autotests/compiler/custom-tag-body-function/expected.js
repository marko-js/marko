var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_body_function_tag = marko_loadTag(require("./tags/test-body-function/renderer"));

function render(input, out) {
  var data = input;

  test_body_function_tag({
      name: "World",
      myBody: function myBody(foo, bar) {
        out.w("This is the body content");
      }
    }, out);
}

marko_template._ = render;
