var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var fooStatic = "Hello Foo",
    barStatic = "Hello Bar";

function render(data, out) {
  var foo = "Hello Foo",
      bar = "Hello Bar";

  out.w("<div></div>");
}

marko_template._ = render;
