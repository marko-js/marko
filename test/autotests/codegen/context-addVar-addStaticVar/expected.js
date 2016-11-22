var template = require("marko/html").c(__filename);

module.exports = template;

var fooStatic = "Hello Foo",
    barStatic = "Hello Bar";

function render(data, out) {
  var foo = "Hello Foo",
      bar = "Hello Bar";

  out.w("<div></div>");
}

template._ = render;
