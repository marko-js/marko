var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_body_function_tag = marko_loadTag(require("./tags/test-body-function/renderer"));

function render(data, out) {
  test_body_function_tag({
      name: "World",
      myBody: function myBody(foo, bar) {
        out.w("This is the body content");
      }
    }, out);
}

template._ = render;
