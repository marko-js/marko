function create(__markoHelpers) {
  var marko_str = __markoHelpers.s;

  return function render(data, out) {
    var attrs = {
            foo: "bar",
            hello: "world"
          };

    out.e("div", attrs, 1)
      .t("Hello " +
        marko_str(name) +
        "!");
  };
}

module.exports = require("marko/vdom").c(__filename, create);
