function create(__markoHelpers) {
  var marko_createElement = __markoHelpers.e,
      marko_const = __markoHelpers.const,
      marko_const_nextId = marko_const("0524f9"),
      marko_node0 = marko_createElement("div", {
          "class": "hello",
          onclick: "onClick()"
        }, 1, marko_const_nextId())
        .t("Hello World!");

  return function render(data, out) {
    out.n(marko_node0);
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
