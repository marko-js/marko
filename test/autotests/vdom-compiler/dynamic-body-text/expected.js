function create(__markoHelpers) {
  var marko_str = __markoHelpers.s,
      marko_attrs0 = {
          "class": "foo"
        };

  return function render(data, out) {
    out.e("div", marko_attrs0, 1)
      .t("Hello " +
        marko_str(name) +
        "!");
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
