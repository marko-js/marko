var marko_template = module.exports = require("marko/vdom").t(__filename);

function render(data, out) {
  out.e("div", {
      foo: "bar",
      hello: "world"
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
