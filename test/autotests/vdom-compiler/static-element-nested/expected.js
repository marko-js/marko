function create(__markoHelpers) {
  var marko_str = __markoHelpers.s,
      marko_createElement = __markoHelpers.e,
      marko_const = __markoHelpers.const,
      marko_const_nextId = marko_const("69a896"),
      marko_node0 = marko_createElement("div", {
          "class": "hello",
          onclick: "onClick()"
        }, 1, marko_const_nextId())
        .t("Welcome!");

  return function render(data, out) {
    out.e("span", null, 2)
      .e("h1", null, 1)
        .t("Hello " +
          marko_str(data.name) +
          "!")
      .n(marko_node0);
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
