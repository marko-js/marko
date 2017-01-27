var marko_template = module.exports = require("marko/html").t(__filename),
    fooStatic = "Hello Foo",
    barStatic = "Hello Bar";

function render(input, out) {
  var foo = "Hello Foo",
      bar = "Hello Bar";

  out.w("<div></div>");
}

marko_template._ = render;
