var marko_template = module.exports = require("marko/html").t(__filename);

class Foo {
    constructor() {

    }
};

function render(data, out) {
  var foo = new Foo();
}

marko_template._ = render;
