var template = require("marko/vdom").c(__filename);

module.exports = template;

function render(data, out) {
  out.e("div", {
      foo: "bar",
      hello: "world"
    }, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

template._ = render;
