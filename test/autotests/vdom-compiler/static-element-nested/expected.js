var marko_template = module.exports = require("marko/vdom").t(__filename),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("69a896"),
    marko_node0 = marko_createElement("div", {
        "class": "hello",
        onclick: "onClick()"
      }, 1, marko_const_nextId())
      .t("Welcome!");

function render(data, out) {
  out.e("span", null, 2)
    .e("h1", null, 3)
      .t("Hello ")
      .t(data.name)
      .t("!")
    .n(marko_node0);
}

marko_template._ = render;
