var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_attrs0 = {
        "class": "foo"
      };

function render(data, out) {
  out.e("div", marko_attrs0, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

template._ = render;
