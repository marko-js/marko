function create(__markoHelpers) {
  var marko_createElement = require("marko/vdom/createElement"),
      marko_const = require("marko/runtime/vdom/const"),
      marko_const_nextId = marko_const("69a896"),
      marko_node0 = marko_createElement("div", {
          "class": "hello",
          onclick: "onClick()"
        }, 1, marko_const_nextId())
        .t("Welcome!");

  return function render(data, out) {
    out.e("span", null, 2)
      .e("h1", null, 1)
        .t(("Hello " + data.name) + "!")
      .n(marko_node0);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
