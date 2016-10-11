function create(__markoHelpers) {
  var marko_str = __markoHelpers.s;

  return function render(data, out) {
    out.e("div", {
        foo: "bar",
        hello: "world"
      }, 1)
      .t("Hello " +
        marko_str(name) +
        "!");
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
