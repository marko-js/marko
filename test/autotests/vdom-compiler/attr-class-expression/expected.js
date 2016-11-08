var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_classList = marko_helpers.cl,
    marko_str = marko_helpers.s,
    marko_classAttr = marko_helpers.ca;

function render(data, out) {
  out.e("div", {
      "class": marko_classAttr(marko_classList("foo", {
          bar: true,
          baz: false
        }))
    }, 1)
    .t("Hello " +
      marko_str(name) +
      "!");
}

template._ = render;
