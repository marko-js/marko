var marko_template = module.exports = require("marko/vdom").t();

function render(data, out) {
  var attrs = {
          foo: "bar",
          hello: "world"
        };

  out.e("div", attrs, 3)
    .t("Hello ")
    .t(name)
    .t("!");
}

marko_template._ = render;
