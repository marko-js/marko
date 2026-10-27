// template.marko
const $template = "<a href=\"/\"> </a>";
const $walks = "D l";
let n = 0;
function random() {
	return ++n / 10;
}
function $setup($scope) {
	_text($scope["#text/0"], random());
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
