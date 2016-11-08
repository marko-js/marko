var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_str = marko_helpers.s,
    marko_attrs0 = {
        "class": "foo"
      };

function render(data, out) {
  out.e("div", marko_attrs0, 1)
    .t("Hello " +
      marko_str(name) +
      "!");
}

template._ = render;
