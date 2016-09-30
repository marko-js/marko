function create(__markoHelpers) {
  return function render(data, out) {
    var attrs = {
            foo: "bar",
            hello: "world"
          };

    out.e("div", attrs, 1)
      .t(("Hello " + name) + "!");
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
