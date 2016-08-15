function create(__markoHelpers) {
  var fooStatic = "Hello Foo",
      barStatic = "Hello Bar";

  return function render(data, out) {
    var foo = "Hello Foo",
        bar = "Hello Bar";

    out.w("<div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
