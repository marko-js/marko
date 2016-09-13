function create(__markoHelpers) {
  var marko_createElement = require("marko/vdom/createElement"),
      marko_const = require("marko/runtime/vdom/const"),
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

(module.exports = require("marko").c(__filename)).c(create);
