var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_classList = marko_helpers.cl,
    marko_classAttr = marko_helpers.ca;

function render(data, out) {
  out.e("div", {
      "class": marko_classAttr(marko_classList("foo", {
          bar: true,
          baz: false
        }))
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

template._ = render;
