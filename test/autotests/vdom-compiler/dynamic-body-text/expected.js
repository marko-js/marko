function create(__markoHelpers) {
  var marko_attrs0 = {
          "class": "foo"
        };

  return function render(data, out) {
    out.e("div", marko_attrs0, 1)
      .t(("Hello " + name) + "!");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
