var marko_template = module.exports = require("marko/vdom").t(__filename),
    marko_helpers = require("marko/runtime/vdom/helpers"),
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

marko_template._ = render;
