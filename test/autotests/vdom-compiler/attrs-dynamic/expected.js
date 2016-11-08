var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_str = marko_helpers.s;

function render(data, out) {
  var attrs = {
          foo: "bar",
          hello: "world"
        };

  out.e("div", attrs, 1)
    .t("Hello " +
      marko_str(name) +
      "!");
}

template._ = render;
