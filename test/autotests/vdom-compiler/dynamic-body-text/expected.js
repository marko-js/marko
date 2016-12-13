var marko_template = module.exports = require("marko/vdom").t(__filename),
    marko_attrs0 = {
        "class": "foo"
      };

function render(data, out) {
  out.e("div", marko_attrs0, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
