var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("0524f9"),
    marko_node0 = marko_createElement("div", {
        "class": "hello",
        onclick: "onClick()"
      }, 1, marko_const_nextId())
      .t("Hello World!");

function render(data, out) {
  out.n(marko_node0);
}

marko_template._ = render;
