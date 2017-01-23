var marko_template = module.exports = require("marko/vdom").t(),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("733fee"),
    marko_node0 = marko_createElement("div", null, 1, marko_const_nextId())
      .t("No colors!");

function render(data, out) {
  out.e("h1", null, 3)
    .t("Hello ")
    .t(data.name)
    .t("!");

  if (data.colors.length) {
    out.be("ul");

    marko_forEach(data.colors, function(color) {
      out.e("li", null, 1)
        .t(color);
    });

    out.ee();
  } else {
    out.n(marko_node0);
  }
}

marko_template._ = render;
