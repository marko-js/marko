var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

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
