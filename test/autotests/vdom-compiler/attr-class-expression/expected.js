function create(__markoHelpers) {
  var marko_classList = __markoHelpers.cl,
      marko_str = __markoHelpers.s,
      marko_classAttr = __markoHelpers.ca;

  return function render(data, out) {
    out.e("div", {
        "class": marko_classAttr(marko_classList("foo", {
            bar: true,
            baz: false
          }))
      }, 1)
      .t("Hello " +
        marko_str(name) +
        "!");
  };
}

module.exports = require("marko/vdom").c(__filename, create);
