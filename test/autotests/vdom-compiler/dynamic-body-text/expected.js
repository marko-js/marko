var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

var marko_attrs0 = {
        "class": "foo"
      };

function render(data, out) {
  out.e("div", marko_attrs0, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
