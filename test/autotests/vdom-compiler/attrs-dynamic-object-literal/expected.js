var marko_template = module.exports = require("marko/vdom").t();

function render(input, out) {
  out.e("div", {
      foo: "bar",
      hello: "world"
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
