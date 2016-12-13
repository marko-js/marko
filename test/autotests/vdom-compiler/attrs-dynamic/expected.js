var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

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
