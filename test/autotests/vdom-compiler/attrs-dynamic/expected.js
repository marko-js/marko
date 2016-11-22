var template = require("marko/vdom").c(__filename);

module.exports = template;

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

template._ = render;
