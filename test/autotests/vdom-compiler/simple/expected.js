function create(__markoHelpers) {
  var marko_forEach = __markoHelpers.f,
      marko_createElement = require("marko/vdom/createElement"),
      marko_const = require("marko/runtime/vdom/const"),
      marko_const_nextId = marko_const("733fee"),
      marko_node0 = marko_createElement("div", null, 1, marko_const_nextId())
        .t("No colors!");

  return function render(data, out) {
    out.e("h1", null, 1)
      .t(("Hello " + data.name) + "!");

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
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
