var marko_template = module.exports = require("marko/html").t(__filename);

var foo = 123;

function bar() {

}
var baz = 456;

function render(data, out) {}

marko_template._ = render;
