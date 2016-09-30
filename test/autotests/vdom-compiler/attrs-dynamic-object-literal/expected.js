function create(__markoHelpers) {
  return function render(data, out) {
    out.e("div", {
        foo: "bar",
        hello: "world"
      }, 1)
      .t(("Hello " + name) + "!");
  };
}

(module.exports = require("marko/vdom").c(__filename)).c(create);
